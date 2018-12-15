from flask import Flask, redirect, url_for, request, render_template, jsonify
from pymongo import MongoClient

import numpy as np
import json

app = Flask(__name__)

client = MongoClient()
db = client.hackerton

PROFESSOR_NUMBER = 258
WORD_NUMBER = 1000

# main 화면을 보여준 친구
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['GET','POST'])
def result():
    # 검색, 쿼리를 보내고
    query = request.args.get('query')
    # 검색 화면에 따라서 달라지는 교수님인가 키워드인가
    type = request.args.get('type')
    # render_template 페이지화면을 호출한다, 쿼리와 타입을 포함하여
    return render_template('result.html', query=query, type=type)

# 검색 쿼리에서 get으로 얻은 이름을, 몽고디비에서 조회시킨다. 교수님을 클릭할때, 이 친구들이 호출된다.
@app.route('/professor')
def professor():
    name = request.args.get('name')
    doc = db.finaldb.find_one({'Name':name})
    doc.pop('_id')
    return jsonify(doc)

# 시각화 데이터를 가져온다. 검색하면 쿼리랑 타입을 가져와서, result matrix를 호출한다.
@app.route('/data')
def get_data():
    query = request.args.get('query')
    type = request.args.get('type')
    # 메트릭스 코드
    res_mat = np.random.rand(PROFESSOR_NUMBER+WORD_NUMBER,PROFESSOR_NUMBER+WORD_NUMBER)

    return jsonify(getJSON(query, type, res_mat))


# 메트릭스 코드를 이제 json으로 변환시킨다, threshold=0.92 이상만 보여준다.
def getJSON(query, query_type, res_mat, threshold=0.92):

    # 1200개 짜리 label이다.
    label_map = db.finaldb.distinct("Name") + db.wordname.distinct("wordname")[:1000]
    for i in range(PROFESSOR_NUMBER):
        label_map.append('professor'+str(i))
    for i in range(WORD_NUMBER):
        label_map.append('word'+str(i))

    # node 교수님, link similarity 값
    res_json={
        "nodes": [],
        "links": []
    }

    # 학과별로 컬러를 맵핑시킨다.
    color_map = {'Graduate School of Technology and Innovation Management(기술경영전문대학원)':'#cd7fb3', 'School of Business Administration(경영학부)':'#cd7fb3', 'School of Electrical and Computer Engineering(전기전자컴퓨터공학부)':'#ea4f6e', 'School of Energy and Chemical Engineering(에너지및화학공학부)':'#52a6b1', 'School of Management Engineering(경영공학부)':'#cd7fb3', 'School of Materials Science and Engineering(신소재공학부)':'#52a6b1', 'School of Mechanical, Aerospace and Nuclear Engineering(기계항공및원자력공학부)':'#52a6b1', 'Graduate School of Creative Design Engineering(디자인-공학 융합전문대학원)':'#f6c431', 'School of Design and Human Engineering(디자인 및 인간공학부)':'#f6c431', 'School of Life Sciences(생명과학부)':'#afcb05', 'School of Natural Science(자연과학부)':'#c4c4c4', 'School of Urban and Environmental Engineering(도시환경공학부)':'#00963f'}
    # 만약에 교수님 쿼리가 들어온다면
    print(res_mat)
    print(query_type)

    if query_type == "professor":
        # 매트릭스를 조회하야
        for idx, i in enumerate(res_mat):
            print(label_map[idx], query)
            # label_map[idx] 이름들의 배열에서, 쿼리와 같은걸 찾는다 "검색한 교수님이름과 같은 배열을 찾는다"
            if label_map[idx] == query:
                # 타겟 : 프로페서들 similarity만을 조회한다.
                target = i[:PROFESSOR_NUMBER]
                # 프로페서중에서 유사도가 top 50인 교수님들을 뽑는다, 그리고 자기자신을 맨 마지막으로 보낸다. 맨뒤에각 맨위로 오더라
                top_50 = sorted(range(len(target)), key=lambda k: target[k])[-49:]
                print(top_50)
                # 50개 중에 자기자신이 없으면 자기자신을 넣는다
                if idx not in top_50:
                    top_50.append(idx)
                # 자기자신이 있으면 뻇다가 마지막에 넣는다
                else:
                    top_50.append(top_50.pop(top_50.index(idx)))

        # 50명의 유사도가 높은 교수님의 배열에서 위치값을 저장한게 top_50
        for jdx, j in enumerate(top_50):

            # 확인차 한번 뽑자
            print(db.finaldb.find_one({"Name":label_map[j]})['department'])

            # node에 해당하는 json itme을 넣는다, id, name은 교수님 이름, chapter : 1, color : 학부
            res_json["nodes"].append({
                "id":label_map[j],
                "chapters": [
                    "1"
                ],
                "name":label_map[j],
                "color":color_map[db.finaldb.find_one({"Name":label_map[j]})['department']]
            })

        # 50개의 유사한 교수님들 위치값을 호출해서
        for i in top_50:
            # 모든 교수님과 키워드에 대한 similarity값을 호출해서
            target = res_mat[i][:PROFESSOR_NUMBER]
            # 각자의 simliarity값을 source랑 target에 맞춰서 넣어준다.
            for jdx, j in enumerate(target):
                if j > threshold and jdx in top_50:
                    res_json["links"].append({
                          "source":label_map[i],
                          "target":label_map[jdx],
                          "similarity":j
                        })
    # keyword로 쿼리가 들어간다면
    else:
        for idx, i in enumerate(res_mat):
            if label_map[idx] == query:
                print(i)
                target = i[:PROFESSOR_NUMBER]
                top_50 = sorted(range(len(target)), key=lambda k: target[k])[-49:]
                if idx not in top_50:
                    top_50.append(idx)
                else:
                    top_50.append(top_50.pop(top_50.index(idx)))

        for jdx, j in enumerate(top_50):
            print(db.finaldb.find_one({"Name":label_map[j]})['department'])
            res_json["nodes"].append({
                "id":label_map[j],
                "chapters": [
                    "1"
                ],
                "name":label_map[j],
                "color":color_map[db.finaldb.find_one({"Name":label_map[j]})['department']]
            })


        for i in top_50:
            target = res_mat[i][:PROFESSOR_NUMBER]
            for jdx, j in enumerate(target):
                if j > threshold and jdx in top_50:
                    res_json["links"].append({
                          "source":label_map[i],
                          "target":label_map[jdx],
                          "similarity":j
                        })
    return res_json

# 플라스크 서버세팅
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

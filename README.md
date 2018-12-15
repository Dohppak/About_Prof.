# About_Prof.
WebApplication for Similarity between Professor and Keyword based on WordEmbeddin
### Problem

UNIST의 신입생들은 전공을 선택할 때, 자신의 관심사와 일치하는 전공을 알지 못한다. 물론 전공을 선택한 이후에도 어떤 교수님이 자신의 관심분야를 연구하지는 모를 것이다. 키워드를 기반으로 자신의 관심사를 확장해 나가는게 일반적이다. 만약 그들이 전공을 선택하는 순간에 필요로 하는 정보가 무엇일

### Target User
- 전공 선택자 : 전공을 선택하고 싶어한다.
- 연구실 선택자 : 연구실을 선택하고 싶어한다.
- 학회 참여자 : 강연 선택 및 co-research 탐색

### Function
- Search
    - Keyword search -> Similar Professor and Similar Keyword
    - Professor search -> Similar Professor and Similar Keyword
- Result
    - Keyword result -> Keyword 연관 학회, 연관 교수님, Citation이 많은 paper, 년도별 언급횟수 (추가 기획필요)
    - Professor result -> 교수님, 연구실 정보, 관심 연구분야, 연관 학회, 논문 링크

### DB

__Data Source__
- http://scholarworks.unist.ac.kr/browse-researcher
- https://www.scopus.com
<br>

__WordEmbedding - Data Description__
<br>

Word Embedding에 들어갈 데이터의 유형은, 교수님의 논문데이터이다. 하지만 full paper를 구할수 없어서 논문의 meta데이터 중, title, abstract, Author Keyword를 기반으로 documents를 구성한다. 

<br>

__NoSQL : Mongodb__
- Collection
    - finaldb
        - key : '_id', 'Abstract', 'Author Ids', 'Author Keywords', 'Authors', 'Cited by', 'Link', 'Title', 'Source title', 'Year', 'filename', 'id', 'Lab', 'Name', 'ResearchInterest', 'Website', 'department', 'imglink'
        - value : 논문은 list형태로 순서대로 들어가 있음
    - keyword
        - key : keyword (ResearchInterest와 Author keyword의 합) 

# DB information

### front data
현재 프론트에 뿌려지는 데이터가 있는 데이터 베이스이다.
Mongodb를 설치한 후, db에 있는 파일들을 mongorestore하여 저장한뒤, db명을 aboutdepart라고 지정하면 다음과 같은 콜렉션의 데이터에 접근이 가능하다. 

- findaldb : Excel 과 scholarworksfront가 합쳐진 형태이다.
    - 'Abstract' 
    - 'Author Ids'
    - 'Author Keywords'
    - 'Authors'
    - 'Cited by'
    - 'Link'
    - 'Title'
    - 'Source title'
    - 'Year'
    - 'filename'
    - 'id'
    - Lab'
    - 'Name'
    - 'ResearchInterest'
    - 'Website'
    - 'department'
    - 'imglink'
    
### raw data

- scholarworksfront
    - 'id'
    - 'Name'
    - 'department'
    - 'ResearchInterest'
    - 'Lab'
    - 'Website'
    - 'imglink'

- excel (https://unistackr0-my.sharepoint.com/:f:/g/personal/seung4298_unist_ac_kr/Ei8hoJt3RhRGsu5c4lARX6gBZFWQMtqliUwdgHQKbD9DAw?e=3he7QJ)
    - 'Authors'
    - 'Author Ids'
    - 'Title'
    - 'Year'
    - 'Source title'
    - 'Volume'
    - 'Issue'
    - 'Art- No-'
    - 'Page start'
    - 'Page end'
    - 'Page count'
    - 'Cited by'
    - 'DOI'
    - 'Link'
    - 'Affiliations'
    - 'Authors with affiliations'
    - 'Abstract'
    - 'Author Keywords'
    - 'Document Type'
    - 'Access Type'
    - 'Source'
    - 'EID'
    - 'filename'
    
- keywrod
    - keywords
    
- Docdb (doc2vec 모델 학습을 위한 데이터 베이스입니다.)
    - 'Title'
    - 'Abstract'
    - 'Author Keywords'
    - 'Name'
    - 'ResearchInterest'
    - 'department'
    - 'docs'
    - 'text'

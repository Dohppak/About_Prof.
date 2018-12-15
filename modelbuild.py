from gensim.models.doc2vec import Doc2Vec, TaggedDocument
import pandas as pd
from pymongo import MongoClient
import preprocessing

# downloads nltk stopwords
import nltk
nltk.download('stopwords')

# import raw data
client = MongoClient()
db = client.aboutdepart
# list 형태로 만든다
database = list(db.Docdb.find())
# 데이터 테이블에 넣자!
testdf = pd.DataFrame(database)

# preprocessing
for idx, i in enumerate(testdf['text']):
    add = preprocessing.docs_preprocessor(i)
    testdf.iloc[idx]['text'] = add

# make a iterative data structure
zipdata = zip(testdf['Name'],testdf['text'])
tagged_data = [TaggedDocument(words=_d, tags=[str(i)]) for i, _d in zipdata]


# how we get best parameter?
model = Doc2Vec(vector_size=100, window=10, min_count=1, workers=8, alpha=0.025, min_alpha=0.015,
                              epochs=20)

#shuffling is better (ot needed at each trianing epoch
shuffle(tagged_data)
#Build vocabulary from a sequence of sentences
model.build_vocab(tagged_data)
#Update the model’s neural weights from a sequence of sentences
model.train(tagged_data, epochs=model.epochs, total_examples=model.corpus_count)

model.save("finalmodel")

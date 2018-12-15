from gensim.models.doc2vec import Doc2Vec

fname = '../finalmodel'
model = Doc2Vec.load(fname)

class DocSim(object):
    def __init__(self, w2v_model , stopwords=[]):
        self.w2v_model = w2v_model
        self.stopwords = stopwords

    def totalvector(self):
        docvec = model.docvecs.vectors_docs
        wordvec = model.wv.vectors
        return totalvector = np.vstack((docvec,wordvec))

    def _cosine_sim(self, vecA, vecB):
        sim = np.dot(vecA, vecB) / (np.linalg.norm(vecA) * np.linalg.norm(vecB))
        if np.isnan(np.sum(csim)):
            return 0
        return sim

    def getsimilarityvector(self, query):
        totalvector = self.totalvector()
        similarmatrix = self._cosine_sim(totalvector, totalvector.T)
        # 쿼리에서 index를 뽑아내서
        if query in model.docvecs.index2entity:
            index = None #으아아아 몰르겠어
        elif query in model.wv.index2entity:
            index = None #으아아 모르겠어
        else:
            print("UNIST에서 탈출하십시요!")

        return similarmatrix[index]

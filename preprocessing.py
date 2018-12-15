from nltk.stem.wordnet import WordNetLemmatizer
from nltk.tokenize import RegexpTokenizer
from nltk.corpus import stopwords


def docs_preprocessor(docs: object) -> object: list
    tokenizer = RegexpTokenizer(r'\w+')

    docs = docs.lower()  # Convert to lowercase.
    docs = tokenizer.tokenize(docs)  # Split into words.
    docs = [w for w in docs if not w in stopwords.words('english')]

    # Remove numbers, but not words that contain numbers.
    docs = [token for token in docs if not token.isdigit()]

    # Remove words that are only one character.
    docs = [token for token in docs if len(token) > 1]

    # Lemmatize all words in documents.

    lemmatizer = WordNetLemmatizer()

    docs = [lemmatizer.lemmatize(token) for token in docs]

    return docs
from preprocessing.doc2json import convert
from preprocessing.exctractDocData import exctract_paragraphs
from nltk import tokenize
import uuid
from peewee import JOIN
from db.models import Contract, Paragraph, Sentence

DEFAULT_DOCUMENT_PATH = "data/rental_contracts/uploaded/95421373-Agreement.pdf.docx"

def get_contract(contract_uuid):
    contract = Contract.get(Contract.uuid == contract_uuid)

    return contract

def save_contract(user_id, filename, is_template):
    contract_uuid = uuid.uuid4()
    contract = Contract(user_id=user_id, filename=filename, 
               is_template=is_template, uuid=contract_uuid,  
               negative_sentence_amount=2, neutral_sentence_amount=10, 
               positive_sentence_amount=5, 
               status='IN_PROGRESS',
               name=filename, 
               description="some description")

    contract.save()

    # TODO: CHANGE INTO BULK INSERTS !!!
    paragraphs = exctract_paragraphs(filename)
    for paragraph in paragraphs:
        paragraph_model = Paragraph(contract=contract, style=paragraph['styles'])
        paragraph_model.save()
        _save_sentences(paragraph_id=paragraph_model.id, text=paragraph['text'])

    return contract

def get_contracts(user_id):
    contracts = Contract.select(
        Contract.date_created, 
        Contract.filename, 
        Contract.uuid, 
        Contract.id,
        Contract.is_template,
        Contract.negative_sentence_amount,
        Contract.neutral_sentence_amount,
        Contract.positive_sentence_amount,
        Contract.status,
        Contract.name,
        Contract.description).where(Contract.user_id == user_id)
        
    return list(contracts)

def get_paragraphs(contract_id):
    paragraphs = Paragraph.select().where(Paragraph.contract_id == contract_id)
    return paragraphs

def get_sentences(contract_id):
    sentences = Sentence.select().join(Paragraph).where(
            Paragraph.contract_id == contract_id).select(
                Paragraph.id, 
                Paragraph.style, 
                Sentence.style,  
                Sentence.text
            )
    return sentences

def _save_sentences(paragraph_id, text):
    sentences = tokenize.sent_tokenize(text)
    
    for sentence in sentences:
        sentence = Sentence(paragraph=paragraph_id, text=text)
        sentence.save()
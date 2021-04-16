from docx import Document
import json

def convert(doc_path):
    document = Document(doc_path)
    paragraphs = {}
    par_index = 0

    for par in document.paragraphs:
        if par.text != '':
            paragraphs[par_index] = {
                    'paragraph': par.text, 
                    'insights': [
                        {
                            'match': par.text,
                            'score': 0.7,
                            'template': True,
                            'templateURL': 'here-will-be-link.com',
                        },
                        {
                            'match': par.text,
                            'score': 0.5,
                            'template': False,
                            'templateURL': None,
                        },
                        {
                            'match': par.text,
                            'score': 0.2,
                            'template': False,
                            'templateURL': None,
                        }
                    ],
                    'advice': 'Here will be some explanation according to score',
                    'styles': {
                        'bold': par.style.font.bold,
                        'underline': par.style.font.underline,
                        'italic': par.style.font.italic,
                        'strike': par.style.font.strike,
                        'size': int(par.style.font.size)//12700
                    }
                }
            par_index+=1

    doc_json = json.dumps(paragraphs)
    
    return doc_json
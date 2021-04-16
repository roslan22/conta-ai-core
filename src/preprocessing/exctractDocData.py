from docx import Document
import json

def exctract_paragraphs(doc_path):
    document = Document(doc_path)
    paragraphs = []

    for par in document.paragraphs:
        if par.text != '':
            paragraphs.append({
                    'text': par.text, 
                    'styles': {
                        'bold': par.style.font.bold,
                        'underline': par.style.font.underline,
                        'italic': par.style.font.italic,
                        'strike': par.style.font.strike,
                        'size': int(par.style.font.size)//12700
                    }
            })
    
    return paragraphs
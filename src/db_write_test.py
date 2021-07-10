import nltk
nltk.download('punkt')

from containers import Container 
import unittest
import db
from db.connDB import ConnDB
from services import userService, contractService
from playhouse.shortcuts import model_to_dict, dict_to_model
from dependency_injector.wiring import inject, Provide
import sys 

DEFAULT_DOCUMENT_PATH = r"/core/data/rental_contracts/test/95421373-Agreement.pdf.docx"

class TestServices(unittest.TestCase):
    def create_new_user(self):
        user_template = userService.create_new_user(username='template_test', 
                                                    password='template123', 
                                                    email='template@template.com', 
                                                    is_real=True)
        return user_template

    def test_user_addition(self):
        # saving user         
        user_template = self.create_new_user()

        # getting user 
        user_retrieved = userService.get_user(username='template_test')
        self.assertEqual('template_test', user_retrieved.username)
        self.assertEqual('template123', user_retrieved.password)
        self.assertEqual('template@template.com', user_retrieved.email)
        self.assertEqual(True, user_retrieved.is_real)

    def test_save_contract(self):
        # first we would like to check that contract information stored with
        
        # creating user
        user_template = self.create_new_user()

        contract = contractService.save_contract(user_id=user_template.id,
                                    filename=DEFAULT_DOCUMENT_PATH, 
                                    is_template=False)

        user_contracts = contractService.get_contracts(user_id=user_template.id)

        # other properties should be exact
        self.assertEqual(len(user_contracts), 1)
        user_contract = user_contracts[0]
        self.assertEqual(user_contract.filename, DEFAULT_DOCUMENT_PATH)
        self.assertEqual(user_contract.is_template, False)

    def test_save_paragraph(self):
        # first we would like to check that contract information stored with
        
        # creating user
        user_template = self.create_new_user()

        contract = contractService.save_contract(user_id=user_template.id,
                                    filename=DEFAULT_DOCUMENT_PATH, 
                                    is_template=False)

        user_contracts = contractService.get_contracts(user_id=user_template.id)

        self.assertEqual(len(user_contracts), 1)
        user_contract = user_contracts[0]
        # now all paragraphs should be in paragraph table
        contract_id = user_contract.id 
        paragraphs = contractService.get_paragraphs(contract_id=contract_id)

        self.assertEqual(len(paragraphs), 40) 

    def test_sentences(self):
        # first we would like to check that contract information stored with
        
        # creating user
        user_template = self.create_new_user()

        contract = contractService.save_contract(user_id=user_template.id,
                                    filename=DEFAULT_DOCUMENT_PATH, 
                                    is_template=False)

        user_contracts = contractService.get_contracts(user_id=user_template.id)

        # now all paragraphs should be in paragraph table
        self.assertEqual(len(user_contracts), 1)
        user_contract = user_contracts[0]
        contract_id = user_contract.id 
        sentences = contractService.get_sentences(contract_id=contract_id)

        self.assertEqual(len(sentences), 56) 
        self.assertEqual(sentences[0].text, 'AGREEMENT OF RENTAL LEASE')
        self.assertEqual(sentences[-1].text, 'TENANT')

    def test_get_contract(self):
        #contract = contractService.get_contract("3738a191-35d9-4504-adfd-d587d29e34f8")
        #print(contract)
        pass

    def test_get_users(self):
        users = userService.get_users()


if __name__ == '__main__':
    print("In main")
    #container = Container()
    #container.wire(modules=[sys.modules[__name__]])

    conn = ConnDB()
    conn.connect_db()
    conn.init_tables()

    unittest.main()
    db.close()
from dependency_injector.wiring import inject, Provide
from containers import Container
from peewee import MySQLDatabase
from . import models

class ConnDB():
    @inject
    def __init__(self, db:MySQLDatabase = Provide[Container.db_service]):
        self.db_service = db.provider()

    def connect_db(self):        
        print("Connecting to db: {}".format(Container.db_service.kwargs['database']))
        self.db_service.init(**Container.db_service.kwargs)
        self.db_service.connect(reuse_if_open=True)
        print("Connected to MySQL")
        return self.db_service

    def close_connection(self):
        self.db_service.close()

    def init_tables(self):
        self.db_service.create_tables([models.User, models.Contract, models.Paragraph, models.Sentence, models.Insight])        

    
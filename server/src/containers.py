from dependency_injector import containers, providers
from peewee import *
import os

class PrintService():
    def __init__(self, status):
        self.status = status

    def do_print(self):
        print(self.status)
        
class Container(containers.DeclarativeContainer):

    config = providers.Configuration()

    env_type = os.getenv('DB_ENV')
    if env_type == 'PROD':
        config.from_yaml(r"server/src/configuration/config_prod.yml")
    else:
        config.from_yaml(r"server/src/configuration/config_dev.yml")

    print("Loading from yml done.")

    db_service = providers.Singleton(
        MySQLDatabase,
        host=config.db.host(), 
        user=config.db.user(), 
        password=config.db.password(),
        database=config.db.database(), 
        port=config.db.port()
    )

    #user_service

    #contract_service
from peewee import *
from playhouse.db_url import connect
import datetime
from playhouse.postgres_ext import JSONField
from dependency_injector.wiring import inject, Provide
from containers import Container

class BaseModel(Model):
    class Meta:
        database = Provide[Container.db_service].provider()

class User(BaseModel):
    id = AutoField()
    username = CharField()
    first_name = CharField()
    last_name = CharField()
    uuid = UUIDField()
    password = CharField()
    email = CharField()
    date_created = DateTimeField(default=datetime.datetime.now)
    is_real=BooleanField(default=True)
    photo = CharField() # 'https://i.pravatar.cc/300?u=13241424214144'

class Contract(BaseModel):
    id = AutoField()
    uuid = UUIDField()
    name = CharField(max_length=200)
    description = CharField(max_length=400)
    user = ForeignKeyField(User, backref='contracts')
    filename = CharField(max_length=200)
    date_created = DateTimeField(default=datetime.datetime.now)
    date_modified = DateTimeField(default=datetime.datetime.now)
    is_template = BooleanField(default=False)
    negative_sentence_amount = IntegerField(default=0)
    neutral_sentence_amount = IntegerField(default=0)
    positive_sentence_amount = IntegerField(default=0)
    status = CharField(max_length=50) # IN_PROGRESS|DONE|TODO
    # TODO connect it to team id<->id    

def paragraph_style_default():
    return {"bold": False, "underline": False, 
            "italic": False, "strike": False, 
            "size": 14}

class Paragraph(BaseModel):
    id = AutoField()
    contract = ForeignKeyField(Contract, backref='paragraphs')
    style = JSONField(default=paragraph_style_default)

class Sentence(BaseModel):
    id = AutoField()
    paragraph= ForeignKeyField(Paragraph, backref='sentences')
    style = JSONField(default=paragraph_style_default)
    text = TextField()

class Insight(BaseModel):
    id = AutoField()
    sentence= ForeignKeyField(Sentence, backref='insights')
    text = TextField()
    match_score = DecimalField()
    match_order = IntegerField(default=0)
    template = BooleanField(default=False)
    template_url = TextField()

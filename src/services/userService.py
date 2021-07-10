import uuid
from peewee import MySQLDatabase
from dependency_injector.wiring import inject, Provide
from db.models import User

def create_new_user(username, password, email, is_real=True):
    print("Creating new user")
    user_uuid = uuid.uuid4()
    user = User(username=username, password=password, 
                email=email, is_real=is_real, uuid=user_uuid,
                first_name='vasya', last_name='pupkin', photo='https://i.pravatar.cc/300?u=13241424214144')
    user.save() # user is now stored in the database
    return user 

def get_users():
    selected_cols = [User.email, User.username, User.uuid, User.first_name,  User.last_name, User.photo]
    users = User.select(*selected_cols).dicts().execute()
    return list(users)

def get_user_by_uuid(user_uuid):
    user = User.get(User.uuid == user_uuid)
    return user 

def get_user(username):
    user = User.get(User.username == username)
    return user

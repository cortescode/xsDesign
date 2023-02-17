from flask import g 
from flask_sqlalchemy import SQLAlchemy
from argparse import ArgumentError

from globals import _db_name

import sqlite3

from .model import Model


#---------------------------------------------------------------
# User Class

class User(Model):
    """
    Params defined by

    """
    
    __tablename__ = 'Users'
    
    id: int
    username:str
    email: str
    password: str
    
    
    def __init__(self, username, email, password):
        try:
            self = self.load_from_db(username, email, password)
        except:
            self.username = username
            self.email = email
            self.password = password
            try:
                self.add_to_db()
            except:
                print("an error occouorred during adding user to db")

    def __repr__(self) -> str:
        return f'<User {self.username}>'
    
    
    # Adding user to db
    @super.require_db
    def add_to_db(self) -> bool:
        """
        Try to add user to db and return True if it is added successfully and False if it isn't
        Require the use of "@require_db" decorator
        """
        
        if((self.username == "" or None) or (self.email == "" or None) or (self.password == "" or None)):
            print("Set all params before add user to db")
            return False
        
        
        try:
            cursor = super.db.cursor()
            statement:str = 'INSERT INTO users(username, email, password) VALUES(?, ?, ?)'
            
            values = [self.username, self.email, self.password]
            cursor.execute(statement, values)
                
            statement = 'SELECT id FROM Users WHERE email = ?'
            user_id = cursor.execute(statement, [self.email]).fetchone()
            
            self.id = user_id
            
        except:
            return False
            
        return True
    
    
    # Loading user from email (or username) if password is True
    @super.require_db
    def load_from_db(self, email, username, password) -> object:
        
        # If params aren't introduced returns None
        if ((email == None and username == None) or password == None):
            print("Needed parameters don't introduced (password and user or email)")
            return None
        
        # Connecting to tb and getting cursor to execute statements
        cursor = super.db.cursor()
        
        # Set statement and value variables depends on params introduced (whether email or username)
        statement: list[str]
        value: list[str]
        
        if(email != None and email != ""):
            statement = 'SELECT * FROM Users WHERE email == ?'
            value = [email]
        elif(username != None and email != ""):
            statement = 'SELECT * FROM Users WHERE username == ?'
            value = [username]
        else:
            print("No username or email introduced")
        
        print(f'value{value}')
        
        # Obtaining user once statement and value are setted
        obtained_user = cursor.execute(statement, value).fetchone()
        
        print(obtained_user)
        if(obtained_user == None):
            print("Introduced params are incorrect")
            return None
        user_password = obtained_user[3]
        
        # Checking user credentials
        if(password == user_password):
            self.id = obtained_user[0]
            self.username = username
            self.email = email
            self.password = password
        else:
            return None
            
        
        return User
    
    
        



#---------------------------------------------------------------
# UserModel related functions


def create_user_table(db) -> bool:
    """Create table Users if not exists"""
    
    statement:str = """
    CREATE TABLE IF NOT EXISTS Users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
    """
    cursor = db.cursor()
    cursor.execute(statement)
    
    db.commit()
    db.close()
    
    return True


"""
#---------------------------------------------------------------
# User Class

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(30), nullable = None)
    
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def __repr__(self):
        return f'<User {self.username}>'
    


#---------------------------------------------------------------
# Database User related functions

def add_user_to_db(user: User):
    db.session.add(user)
    db.session.commit()

"""
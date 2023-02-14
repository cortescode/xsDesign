from flask import g 
from flask_sqlalchemy import SQLAlchemy
from argparse import ArgumentError

from globals import _db_name

import sqlite3


#---------------------------------------------------------------
# User Class

class User():
    __tablename__ = 'Users'
    
    id: int
    username:str
    email: str
    password: str
    
    
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password


    def __repr__(self) -> str:
        return f'<User {self.username}>'
    
    
    # Adding user to db
    def add_to_db(self) -> bool:
        """Try to add user to db and return True if it is added successfully and False if it isn't"""
        
        if(self.username == "" or None):
            print("Set all params before add user to db")
            return False
        
        if(self.email == "" or None):
            print("Set all params before add user to db")
            return False
        
        if(self.password == "" or None):
            print("Set all params before add user to db")
            return False
        
        try:
            db = sqlite3.connect(f'databases/{ _db_name }')
            cursor = db.cursor()
            statement:str = 'INSERT INTO users(username, email, password) VALUES(?, ?, ?)'
            values = [self.username, self.email, self.password]
            cursor.execute(statement, values)
                
            db.commit()
            
            statement = 'SELECT id FROM Users WHERE email = ?'
            user_id = cursor.execute(statement, [self.email]).fetchone()
            
            self.id = user_id
            db.close()
            
        except:
            return False
            
        return True
    
    
    # Loading user from email (or username) if password is True
    def load_from_db(self, email, username, password) -> object:
        
        # If params aren't introduced returns None
        if ((email == None and username == None) or password == None):
            print("Needed parameters don't introduced (password and user or email)")
            return None
        
        
        # Connecting to tb and getting cursor to execute statements
        db = sqlite3.connect(f'/databases/{ _db_name }')
        cursor = db.cursor()
        
        
        # Set statement and value variables depends on params introduced (whether email or username)
        statement: str
        value: str 
        
        if(email != None):
            statement = 'SELECT user FROM Users WHERE email = ?'
            value = email
        elif(username != None):
            statement = 'SELECT user FROM Users WHERE username = ?'
            value = username
        
        
        # Obtaining user once statement and value are setted
        obtained_user = cursor.execute(statement, value).fetchone()
        print(obtained_user)
        if(obtained_user == None):
            print("Introduced params are incorrect")
            db.close()
            return None
        user_password = obtained_user[3]
        
        # Checking user credentials
        if(password == user_password):
            self.id = obtained_user[3]
            self.username = username
            self.email = email
            self.password = password
        else:
            db.close()
            return None
            
        # Closing the cursor
        db.close()
        
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
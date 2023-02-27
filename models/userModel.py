from flask import g 
from flask_sqlalchemy import SQLAlchemy
from argparse import ArgumentError

from globals import db



#---------------------------------------------------------------
# User Class

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(30), nullable = None)
    
    def __repr__(self):
        return f'<User {self.username}>'
    


#---------------------------------------------------------------
# Database User related functions

def add_user_to_db(user: User):
    db.session.add(user)
    db.session.commit()

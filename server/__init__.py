from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from os import path

DB_NAME = 'database.db'



def create_app(name):
    app = Flask(name)
    app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///databases/{DB_NAME}'
    

def register_blueprints(app):
    # Importing blueprints
    from .auth import auth_blueprint
    
    app.register_blueprint(auth_blueprint)



def create_db(app):
    # Starting db
    db.init_app(app)
    
    print("Creating app")
    
    from models.userModel import User
    
    with app.app_context():
        db.create_all()

def create_database(app):
    if not path.exists('databases/' + DB_NAME):
        db.create_all(app=app)
        print('Created Database!')
        
""" 
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
    

def add_user_to_db(user: User):
    db.session.add(user)
    db.session.commit()

        
 """
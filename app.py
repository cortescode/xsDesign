from flask import Flask, send_from_directory, session
from flask_sqlalchemy import SQLAlchemy

""" from flask import Blueprint
from flask_sqlalchemy import SQLAlchemy
from server.auth import auth_blueprint
from models import * """

from server import create_app
from models.userModel import create_db

app = create_app(__name__)


db = create_db(app)



#---------------------------------------------------------------
# Defining Routes

@app.route("/")
def base():
    return send_from_directory('client/public', 'index.html')

@app.route("/home")
def home():
    return send_from_directory('client/public', 'index.html')

@app.route("/dashboard")
def dashboard():
    return send_from_directory('client/public', 'index.html')

@app.route("/pricing")
def pricing():
    return send_from_directory('client/public', 'index.html')

@app.route("/<path:path>")
def routes(path):
    print(path)
    return send_from_directory('client/public', 'index.html')




#---------------------------------------------------------------
# Starting app

if __name__ == "__main__":
    app.run(debug=True)
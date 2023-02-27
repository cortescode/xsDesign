from flask import Flask, send_from_directory, g, jsonify
from flask import session
from flask_sqlalchemy import SQLAlchemy
from server.auth import auth_blueprint
from globals import _db_name, db

import os


#---------------------------------------------------------------
# Starting app 
app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{os.path.abspath("databases/" + _db_name)}'

db.init_app(app)
with app.app_context():
    from models.userModel import User
    db.create_all()


#---------------------------------------------------------------
# Registring blueprints
app.register_blueprint(auth_blueprint, url_prefix ='/auth')


#---------------------------------------------------------------
# Defining Routes
@app.get("/")
def base():
    return send_from_directory('client/public', 'index.html')

@app.get("/home")
def home():
    return send_from_directory('client/public', 'index.html')

@app.get("/contact")
def contact():
    return send_from_directory('client/public', 'index.html')


@app.get("/dashboard")
def dashboard():
    return send_from_directory('client/public', 'index.html')

@app.get("/pricing")
def pricing():
    return send_from_directory('client/public', 'index.html')

@app.get("/app")
def home_app():
    return send_from_directory('client/public', 'index.html')



@app.route("/<path:path>")
def routes(path):
    print(path)
    return send_from_directory('client/public', path)




#---------------------------------------------------------------
# Run App

if __name__ == "__main__":
    app.run(debug=True)
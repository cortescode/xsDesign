from flask import Flask, send_from_directory, g, jsonify
from flask import session
from flask_sqlalchemy import SQLAlchemy
from server.auth import auth_blueprint
from server.auth.login import login_required

import os


#---------------------------------------------------------------
# Starting app 
app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'


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
@login_required
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
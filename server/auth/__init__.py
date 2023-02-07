from flask import Blueprint, send_from_directory, request, redirect, url_for, jsonify
from flask import session
from server.auth.login import login_user
from server.auth.signup import signup_user



auth_blueprint = Blueprint('auth', __name__, url_prefix='/auth')


@auth_blueprint.route('/')
def auth():
    return send_from_directory('client/public', 'index.html')


@auth_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form["email"]
        password = request.form["password"]
        
        logged_in = login_user(email, password)
        
        data: dict
        if(logged_in):
            data =  {"status": "successful"}
        else:
            data = {"status": "error"}
        
        
        data = jsonify(data)
        
        return data



@auth_blueprint.route('/signup', methods = ['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form["username"]
        email = request.form["email"]
        password = request.form["password"]
        print(username, email, password)
        
        signed_up = signup_user(username, email, password)
        print('Error on signup_user function')
        

        data: dict
        if(signed_up):
            data =  {"status": "successful"}
        else:
            data = {"status": "error"}
        
        
        data = jsonify(data)
        
        return data



@auth_blueprint.route('/session', methods = ['POST'])
def session():
    if(request.method == 'POST'):
        data: dict
        if('user_id' in session):
            data['user_id'] = session['user_id']
            data['username'] = session['username']
            
            data = jsonify(data)
            
            return data



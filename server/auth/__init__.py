from flask import Blueprint, send_from_directory, request, redirect, url_for, jsonify
from flask import session
from server.auth.login import login_user
from server.auth.signup import signup_user



auth_blueprint = Blueprint('auth', __name__, url_prefix='/auth')


@auth_blueprint.get('/')
def auth():
    return send_from_directory('client/public', 'index.html')


@auth_blueprint.post('/login')
def login():
    
    # Get email and password from post form
    email = request.form["email"]
    print(email)
    password = request.form["password"]
    print(password)
    
    # Loggin user. Get true or false depends of if login made successfully
    logged_in: bool = login_user(email, password)
    
    # Create status dict and return data depends of logged in 
    status: dict
    if(logged_in):
        status =  {"status": "successful"}
    else:
        status = {"status": "error"}
        
    status = jsonify(status)
        
    return status



@auth_blueprint.post('/signup')
def signup():
    username = request.form["username"]
    email = request.form["email"]
    password = request.form["password"]
        
    signed_up = signup_user(username, email, password)

    data: dict
    if(signed_up):
        data =  {"status": "successful"}
    else:
        data = {"status": "error"}
        
    data = jsonify(data)
        
    return data



@auth_blueprint.get('/session')
def get_session():
    session_data = {
    }
    if 'user_id' in session:
        session_data['user_id'] = session['user_id']
        session_data['username'] = session['username']
    
    else:
        return jsonify({"error": "There is no session active"})
    
    session_data = jsonify(session_data)
    return session_data


    
@auth_blueprint.get('/clear-session')
def clear_session():
    session.clear()
    return '<h2> Session deleted </h2>'


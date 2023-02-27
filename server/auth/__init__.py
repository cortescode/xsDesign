from flask import Blueprint, send_from_directory, request, redirect, url_for, jsonify
from flask import session, make_response
from server.auth.login import login_user
from server.auth.signup import signup_user



auth_blueprint = Blueprint('auth', __name__, url_prefix='/auth')


@auth_blueprint.get('/')
def auth():
    return send_from_directory('client/public', 'index.html')




@auth_blueprint.route('/login', methods = ["GET", "POST"])
def login():
    if(request.method == "POST"):
        # Get email and password from post form
        email = request.form["email"]
        password = request.form["password"]
        
        # Loggin user. Get true or false depending on whether login is made successfully
        logged_in: bool = login_user(email, password)
        
        # Create status dict and return data depends of logged_in boolean
        status: dict
        if(logged_in):
            status = {
                "status": "OK",
                "Message": "User logged in in successfully"
            }
        else:
            status = {
                "status": "ERROR",
                "message": "Data introduced isn't correct"
            }
        status = jsonify(status)
            
        return status
    
    return send_from_directory('client/public', 'index.html')



@auth_blueprint.route('/signup', methods = ["GET", "POST"])
def signup():
    if(request.method == "POST"):
        # Getting user data from request form
        username = request.form["username"]
        email = request.form["email"]
        password = request.form["password"]
        
        signed_up = signup_user(username, email, password)

        # Create status dict and return data depends of logged_in boolean
        status: dict
        if(signed_up):
            status = {
                "status": "OK",
                "message": "User signed up in successfully"
            }
        else:
            status = {
                "status": "ERROR",
                "message": "Data introduced isn't correct"
            }
        status = jsonify(status)
            
        return status
    
    return send_from_directory('client/public', 'index.html')


@auth_blueprint.get('/logout')
def logout():
    # Remove the variables that you want to delete from the session
    session.pop('user_id', None)
    session.pop('username', None)

    # Clear the session data
    session.clear()
    print(session)
        
    response = make_response(redirect('/'))
    response.set_cookie('session', expires=0)
    
    return redirect('/')




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


from flask import redirect, request, session, url_for
from models.userModel import User
from globals import db


 
def login_required(function):
    def wrapper(*args, **kwargs):
        if 'user_id' not in session:
            return redirect(url_for('/auth'), next = request.url)
        return function(*args, **kwargs)
    return wrapper



def login_user(email, password) -> bool:
    """
        Compare data with database and return true if data is 
        correct and false if it isn't. If true also assigns data
        to session dict.
    """
    
    user = User.query.filter_by(email=email, password = password).first()
    
    if user != None:
        session["user_id"] = user.id
        session["username"] = user.username
        return True
    else:
        return False
        

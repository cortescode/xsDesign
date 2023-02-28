from flask import redirect, request, session, url_for
from db_interaction.users import get_validated_user


 
def login_required(function):
    def wrapper(*args, **kwargs):
        if 'username' not in session:
            return redirect('/auth/login')
        return function(*args, **kwargs)
    return wrapper



def login_user(email, password) -> bool:
    '''
        Compare data with database and return true if data is 
        correct and false if it isn't. If true also assigns data
        to session dict.
    '''
    
    # Getting user from database
    user = get_validated_user(email, password)
    
    if user == None:
        return False
    else:
        session['email'] = user['email']
        session['username'] = user['username']
        return True
        

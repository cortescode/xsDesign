from flask import session
from models.userModel import User


def signup_user(username, email, password) -> bool:

    user = User(username=username, email=email, password = password)
    
    user_added: bool = user.add_to_db()
    
    if(user_added):
        # if user have been added successfully to database add info to session and return true
        session['user_id'] = user.id
        session['username'] = user.username
        
        return True
    
    return False

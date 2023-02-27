from flask import session
from models.userModel import User
from globals import db


def signup_user(username: str, email: str, password: str) -> bool:
    """
        Returns True if user is added successfully
        Returns False if user data isn't correct
    """
    
    data_is_correct: bool = check_data(username, email, password)
    if(data_is_correct):
        return False

    # Defining user
    user = User(username=username, email=email, password = password)
    
    # Checking that the user has been found
    if user is None:
        return False
    
    # Adding user to database
    db.session.add(user)
    db.session.commit()
    
    # Adding user to server session
    session['user_id'] = user.id
    session['username'] = user.username
    
    return True




def check_data(username: str, email: str, password: str) -> bool:
    """
        Returns true if the params introduced follow the defined rules
    """
    
    if username == "" or username == None:
        return False
    
    # Checking email is not none and that letters are more than 4
    if  email == None or len(email) < 5:
        return False
    if '@' not in email or '.' not in email:
        return False
    
    if len(password) < 8:
        return False
    
    return True
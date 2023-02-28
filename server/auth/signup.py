from flask import session

from db_interaction.users import store_user


def signup_user(username: str, email: str, password: str) -> bool:
    """
        Returns True if user is added successfully
        Returns False if user data isn't correct
    """
    print("Signup user")
    
    # checking introduced params
    data_is_correct: bool = check_data(username, email, password)
    if not data_is_correct:
        print("Data isn't correct")
        return False
    
    # Store user and check if is stored correctly
    stored_successfully: bool = store_user(username, email, password)
    if not stored_successfully:
        print("User doesn't stored successfully")
        return False
    
    # Adding user to server session
    session['username'] = username
    session['email'] = password
    
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
from flask import session


def signup_user(username, email, password) -> bool:
    
    try:
        # trying to add user to database and returnf false if error
        from models.userModel import User, add_user_to_db
        user = User(username=username, email=email, password = password)
        add_user_to_db(user)
    except:
        print("Error creating and saving user: ")
        return False
    
    # if user have been added successfully to database add info to session and return true
    session['user_id'] = user.user_id
    session['username'] = user.username
    
    return True

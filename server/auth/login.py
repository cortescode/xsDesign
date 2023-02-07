from flask import redirect, request, session

def login_required(function):
    def wrapper(*args, **kwargs):
        if 'user_id' not in session:
            return redirect(url_for(auth), next = request.url)
        return function(*args, **kwargs)
    return wrapper

        


def login_user(email, password) -> bool:
    """This function check if the email and password introduced are correct and return a dictionary with the user data"""

    if ["user_id"] in session:
        if(user.password == password):
            session["user_id"] = user.user_id
            session["username"] = user.username
            return True
        else:
            return False
    else:
        print("The email introduded is incorrect")
        return False
        

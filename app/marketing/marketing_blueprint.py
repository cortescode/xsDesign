from flask import Blueprint, request, jsonify, send_from_directory
from database.leads import store_lead


marketing_blueprint = Blueprint('marketing', __name__, url_prefix='/marketing')


@marketing_blueprint.post('/leads/create')
def create_lead():
    # Getting user data from json request
    data = request.get_json()

    name: str = data.get('name')
    email: str = data.get('email')

    print(name)
    print(email)
    
    # Store lead in dynamodb
    stored = store_lead(name, email)
    
    # Create status dict and return data depends of logged_in boolean
    status: dict
    if stored:
        status = {
            "status": "OK",
            "message": "Lead stored successfully"
        }
    else:
        status = {
            "status": "ERROR",
            "message": "Lead couldn't be stored"
        }
    status = jsonify(status)
        
    return status




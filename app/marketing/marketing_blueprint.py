from flask import Blueprint, request, jsonify, send_from_directory
from database.leads import store_lead
from .email_sender import send_contact_message


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




@marketing_blueprint.route('/contact-message', methods=['POST'])
def obtain_contact_message():
    # Getting user data from post request
    data = request.get_json()

    name: str = data.get('name', 'No name')
    email: str = data.get('email')
    message: str = data.get('message')

    amployees_amount: str = data.get('size', 'Not provided')
    business_name: str = data.get('business_name', 'Not provided')

    additional_data = {
        "employees_amount": amployees_amount,
        "business_name": business_name
    }

    destination: str = data.get('destination', 'cortesrodriguezpablo3@gmail.com')

    email_sent = send_contact_message(name, email, message, additional_data, destination)

    # Create status dict and return data depends of logged_in boolean
    status: dict
    if email_sent:
        status = {
            "status": "OK",
            "message": "Message stored successfully"
        }
    else:
        status = {
            "status": "ERROR",
            "message": "Message couldn't be stored"
        }
    status = jsonify(status)
        
    return status



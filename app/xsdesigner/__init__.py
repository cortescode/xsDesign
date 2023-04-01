from flask import Blueprint, send_from_directory, request, redirect, url_for, jsonify
from flask import session, make_response

websites_blueprint = Blueprint('websites', __name__, url_prefix='/websites')

@websites_blueprint.get('/designer')
def page_designer():
    return send_from_directory('client/public', 'index.html')


@websites_blueprint.post('/webpage/update-website')
def save_changes():
    return True


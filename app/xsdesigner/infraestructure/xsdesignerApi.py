from flask import Blueprint, send_from_directory, request, redirect, url_for, jsonify
from flask import session, make_response

from .dynamoConnection import *
from .S3Connection import *

from ..application.pageSetUp import *
from ..application.siteManager import *

xsdesigner_blueprint = Blueprint('xsdesigner', __name__, url_prefix='/websites')

@xsdesigner_blueprint.get('/designer')
def page_designer():
    return send_from_directory('client/public', 'index.html')


@xsdesigner_blueprint.post('/webpage/update-website')
def save_changes():
    return True


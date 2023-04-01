from flask import  Flask, Blueprint, send_from_directory


agency_blueprint = Blueprint('agency', __name__, url_prefix='/agency')


@agency_blueprint.get('/services')
def services():
    return send_from_directory('client/public/index.html')
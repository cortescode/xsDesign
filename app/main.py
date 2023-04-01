from flask import Blueprint, send_from_directory

from .auth import login_required



main_blueprint = Blueprint('main',__name__, url_prefix='/')


@main_blueprint.get("/home")
def home():
    return send_from_directory('client/public', 'index.html')

@main_blueprint.get("/contact")
def contact():
    return send_from_directory('client/public', 'index.html')

@main_blueprint.get("/dashboard")
@login_required
def dashboard():
    return send_from_directory('client/public', 'index.html')

@main_blueprint.get("/pricing")
def pricing():
    return send_from_directory('client/public', 'index.html')

@main_blueprint.get("/app")
def home_app():
    return send_from_directory('client/public', 'index.html')


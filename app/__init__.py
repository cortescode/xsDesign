from flask import Flask, send_from_directory

# Importing blueprints
from .auth import auth_blueprint
from .xsdesigner.infraestructure.xsdesignerApi import xsdesigner_blueprint

from .marketing import marketing_blueprint

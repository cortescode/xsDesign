from flask import Flask, send_from_directory

# Importing blueprints
from .auth import auth_blueprint
from .SEO import SEO_blueprint, setup_mapping
from .xsdesigner.infraestructure.xsdesignerApi import xsdesigner_blueprint
from .agency import agency_blueprint


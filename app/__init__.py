from flask import Flask, send_from_directory

# Importing blueprints
from .auth import auth_blueprint
from .SEO import SEO_blueprint, setup_mapping
from .websites import websites_blueprint
from .main import main_blueprint



from flask import Flask
from app import *
from flask_cors import CORS


import os
from dotenv import load_dotenv
load_dotenv()


app = Flask(__name__)
CORS(app)
app.secret_key = os.environ.get('SECRET_KEY')

# Registring blueprints
app.register_blueprint(auth_blueprint, url_prefix ='/auth')
app.register_blueprint(SEO_blueprint, url_prefix='/')
app.register_blueprint(xsdesigner_blueprint, url_prefix='/websites')
app.register_blueprint(agency_blueprint, url_prefix='/')



@app.before_first_request
def seo_mapping():
    setup_mapping(app)

@app.route("/<path:path>")
def static_files(path):
    print(path)
    try:
        return send_from_directory('client/public', path)
    except:
        return send_from_directory('client/public', 'index.html')

#---------------------------------------------------------------
# Defining Routes
@app.get("/")
def base():
    return send_from_directory('client/public', 'index.html')




#---------------------------------------------------------------
# Run App

if __name__ == "__main__":
    app.run()
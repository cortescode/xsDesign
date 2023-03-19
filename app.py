from flask import Flask, send_from_directory, g, jsonify
from flask import session
from blueprints.auth import auth_blueprint
from blueprints.auth.login import login_required

from blueprints.SEO.routesMap import setup_mapping
from blueprints.SEO import SEO_blueprint

from blueprints.websites import websites_blueprint

import os
from dotenv import load_dotenv
load_dotenv()



#---------------------------------------------------------------
# Starting app 
app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY')



#---------------------------------------------------------------
# Registring blueprints
app.register_blueprint(auth_blueprint, url_prefix ='/auth')
app.register_blueprint(SEO_blueprint, url_prefix='/')
app.register_blueprint(websites_blueprint, url_prefix='/websites')


@app.before_first_request
def seo_mapping():
    setup_mapping(app)



#---------------------------------------------------------------
# Defining Routes
@app.get("/")
def base():
    return send_from_directory('client/public', 'index.html')

@app.get("/home")
def home():
    return send_from_directory('client/public', 'index.html')

@app.get("/contact")
def contact():
    return send_from_directory('client/public', 'index.html')

@app.get("/dashboard")
@login_required
def dashboard():
    return send_from_directory('client/public', 'index.html')

@app.get("/pricing")
def pricing():
    return send_from_directory('client/public', 'index.html')

@app.get("/app")
def home_app():
    return send_from_directory('client/public', 'index.html')



@app.route("/<path:path>")
def routes(path):
    print(path)
    try:
        check_exists_response = send_from_directory('client/public', path)
        return send_from_directory('client/public', path)
    except:
        return send_from_directory('client/public', 'index.html')




#---------------------------------------------------------------
# Run App

if __name__ == "__main__":
    """ with app.app_context():
        set_up_mapping(app)  """
    app.run()
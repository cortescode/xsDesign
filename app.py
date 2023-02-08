from flask import Flask, send_from_directory, session
from models import start_db
from server.auth import auth_blueprint


DB_NAME = 'database.db'


#---------------------------------------------------------------
# Starting app 
app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///databases/{DB_NAME}'


#---------------------------------------------------------------
# Starting Database
start_db(app)


#---------------------------------------------------------------
# Registring blueprints
app.register_blueprint(auth_blueprint, url_prefix ='/auth')


#---------------------------------------------------------------
# Defining Routes

@app.route("/")
def base():
    return send_from_directory('client/public', 'index.html')

@app.route("/home")
def home():
    return send_from_directory('client/public', 'index.html')

@app.route("/dashboard")
def dashboard():
    return send_from_directory('client/public', 'index.html')

@app.route("/pricing")
def pricing():
    return send_from_directory('client/public', 'index.html')

@app.route("/<path:path>")
def routes(path):
    print(path)
    return send_from_directory('client/public', 'index.html')




#---------------------------------------------------------------
# Run App

if __name__ == "__main__":
    app.run(debug=True)
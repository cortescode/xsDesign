from flask import Flask, send_from_directory, g, jsonify

from flask import session
from server.auth import auth_blueprint
from globals import _db_name



#---------------------------------------------------------------
# Starting app 
app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///databases/{_db_name}'




#---------------------------------------------------------------
# Registring blueprints
app.register_blueprint(auth_blueprint, url_prefix ='/auth')




#---------------------------------------------------------------
# Defining Routes

@app.before_first_request
def load_user_if_exists():
    print('Current Session')
    print(session)
    


#---------------------------------------------------------------
# Defining Routes

@app.get("/")
def base():
    return send_from_directory('client/public', 'index.html')

@app.get("/home")
def home():
    return send_from_directory('client/public', 'index.html')

@app.get("/dashboard")
def dashboard():
    return send_from_directory('client/public', 'index.html')

@app.get("/pricing")
def pricing():
    return send_from_directory('client/public', 'index.html')


@app.route("/<path:path>")
def routes(path):
    print(path)
    return send_from_directory('client/public', path)




#---------------------------------------------------------------
# Run App

if __name__ == "__main__":
    from restart import restart
    restart()
    app.run(debug=True)
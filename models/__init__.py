from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

def start_db(app) -> SQLAlchemy:
    db.init_app(app)
    return SQLAlchemy
import sqlite3

from models.userModel import create_user_table

def create_tables(db):
    create_user_table(db)
    
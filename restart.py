from globals import _db_name
from flask import session

import sqlite3


def restart():
    db = sqlite3.connect(f'databases/{_db_name}')
    cursor = db.cursor()

    statement = "DELETE FROM Users"

    cursor.execute(statement)



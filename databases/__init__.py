import sqlite3
from models import create_tables
from globals import _db_name


def create_database() -> sqlite3.Connection:
    db: sqlite3.Connection = sqlite3.connect(f'databases/{_db_name}')
    create_tables(db)
    return db
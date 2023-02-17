
import abc
import sqlite3


class Model(abc.ABC):
    __database__:str = 'database.db'
    __tablename__:str
    
    __table_create_statement__:str
    
    db: sqlite3.Connection
    
    def __init__(self):
        self.db = sqlite3.connect(f'databases/{ self.__database__ }')

        self.db.commit()
        self.db.close()
    
    @abc.abstractmethod
    def add_to_db():
        pass
    
    
    @abc.abstractmethod
    def load_from_db():
        pass
    
    
    #this function is a decorator
    def require_db(self, func):
        def wrapper(*args, **kwargs):
            self.db = sqlite3.connect(f'databases/{ self.__database__ }')
            f_result = func(*args, **kwargs)
            self.db.commit()
            self.db.close()
            return f_result
        return wrapper
    
    
    @require_db
    def check_if_model_table_exists(self) -> bool:
        cursor = self.db.cursor()

        cursor.execute("SELECT username FROM Users WHERE type='table' AND name=?", (self.__tablename__,))
        result = cursor.fetchone()

        if result:
            return True
        else:
            return False
        
    
    @require_db
    def create_table(self):
        if(self.check_if_model_table_exists()):
            return False
        
        statement:str = """
        CREATE TABLE IF NOT EXISTS Users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
        """
        
        cursor = self.db.cursor()
        cursor.execute(statement)
            
        
        
    
            
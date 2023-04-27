
from .page import Page

class Category():
    name: str
    pages: list[Page]
    subcategories = dict

    def __init__(self, name:str, pages: dict[Page] = None):
        self.name = name
        self.pages = pages


    def add_subcategory(self, category):
        self.subcategories.push(category)

    

        

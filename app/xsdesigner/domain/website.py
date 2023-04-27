from .category import Category
from .page import Page
class Website:
    name: str
    domain: str
    pages: list[Page]
    Categories: list[Category]


    def __init__(self, 
        user:str, 
        site_name:str, 
        site_domain:str=None):
        
        default_page = Page('home')
        self.pages['/'] = default_page

        pass


    def update_page(self, page_name, new_content):
        Page

    def generate_page(self):
        pass

    def toDict(self):
        pass



        


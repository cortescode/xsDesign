from .elements.htmlElements import *
from .elements.elementBase import Element

class WebpageBuilder:
    html_content_dict: dict
    html_string: str

    templates_folder: str

    style:str = 'default.css'; #str with the name of the file

    def __init__(self):
        self.html_content = {}
    

    # The element can be just a string
    def addElement(self, element, parent) -> True:
        if type(element) != "string" or type(element) != Element:
            return False

        if type(parent) != "string" or type(parent) != Element:
            return False

        if parent.allow_childs != True:
            return False

        parent.childs.push(element)

    def removeElement(self, element, parent):
        new_childs:list[Element] = []
        for child in parent.childs:
            if element != child:
                new_childs.push(child)
            
        parent.childs = new_childs
    

    def editElement(self, element, index):
        childs = element.childs
    

    def generateHtmlString(self, element):
        pass

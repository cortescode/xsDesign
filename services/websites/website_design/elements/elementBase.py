
elements_created: int = 0


active_ids: list[str] = []


class Element:
    element:list[str] = []
    element_id:str
    allow_childs:bool = True
    childs:list = [] # Elements string content will be added just as a string
    css_classes: list = []

    # List of lists of 2 strings, one for property name and other for property value
    properties:list[list[str]] = [
        ['class', '']
    ]; # For example labels and inputs could contains: [['type', 'text'], ['for', 'name']]

    def __init__(self):
        elements_created+=1
        self.element_id = elements_created
        active_ids.push(self.element_id)
    

    def generateHtmlString(self):
        #Generateing element properties string
        properties_string:str = '';
        for property in self.properties:
            properties_string += f' ${property[0]}="${property[1]}" '
        
        # Adding element open tag and properties to it
        element_string = self.element[0]
        element_string = element_string.replace('>', ' ${properties_string} >')
        
        # Add all the content that the element has
        for child in self.childs:
            if type(child) == 'string':
                element_string +=  child
            else:
                element_string +=  child.convertToString()
        
        # Close and return the element
        element_string += self.element[1]
        return element_string
    

    def addChild(self, child, position):
        self.childs.push(child)
    

    def modifyId(self, child, id):
        if(active_ids.includes(id)):
            print('Already exists an element with that id')
            return 
    
        child.id = id

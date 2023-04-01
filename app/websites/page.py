

class Page():
    name: str
    url: str

    header: str
    body:str

    def __init__(self, name:str, url:str, body:str = None):
        self.name = name
        self.urll = url

        self.content = body or "<p>Empty page</p>"

    
    def update_page(self, new_content:str):
        self.body = new_content



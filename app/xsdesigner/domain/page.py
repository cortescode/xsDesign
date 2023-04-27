

class Page():
    name: str
    url: str

    _body:str
    variables: dict

    def __init__(self, name:str, url:str, body:str = None, variables: dict = None):
        self.name = name
        self.url = url

        self._body = body

        self.body = body or "<p>Empty page</p>"


    def set_body(self, new_content:str):
        self.body = new_content


    def get_body(self):
        return self.body



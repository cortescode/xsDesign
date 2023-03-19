from .elementBase import Element


class html (Element):
    def __init__(self):
        super.element = ['<html>', '</html>']
        super.allow_childs = True

class body (Element):
    def __init__(self):
        super.element = ['<body>', '</body>']
        super.allow_childs = True

class div (Element):
    def __init__(self):
        super.element = ['<div>', '</div>']
        super.allow_childs = True

class h1 (Element):
    def __init__(self, text):
        super.element = ['<h1>', '</h1>']
        super.allow_childs = True
        super.childs = [text]

class h2 (Element):
    def __init__(self, text):
        super.element = ['<h2>', '</h2>']
        super.allow_childs = True
        super.childs = [text]

class h3 (Element):
    def __init__(self, text):
        super.element = ['<h3>', '</h3>']
        super.allow_childs = True
        super.childs = [text]


class h3 (Element):
    def __init__(self, text):
        super.element = ['<h3>', '</h3>']
        super.allow_childs = True
        super.childs = [text]


class h4 (Element):
    def __init__(self, text):
        super.element = ['<h4>', '</h4>']
        super.allow_childs = True
        super.childs = [text]


class p (Element):
    def __init__(self, text):
        super.element = ['<p>', '</p>']
        super.allow_childs = True
        super.childs = [text]

class a (Element):
    def __init__(self, url, text):
        super.element = ['<a>', '</a>']
        super.allow_childs = True
        super.properties = ['href', url]
        super.childs = [text]
        
class button (Element):
    def __init__(self, text, action):
        super.element = ['<button>', '</button>']
        super.allow_childs = True
        super.childs = [text]


class nav (Element):
    def __init__(self):
        super.element = ['<nav>', '</nav>']
        super.allow_childs = True


class ul (Element):
    def __init__(self, childs):
        super.element = ['<ul>', '</ul>']
        super.allow_childs = True
        super.childs = childs


class li (Element):
    def __init__(self, text):
        super.element = ['<li>', '</li>']
        super.allow_childs = True
        super.childs = [text]


class span (Element):
    def __init__(self, text):
        super.element = ['<span>', '</span>']
        super.allow_childs = True
        super.childs = [text]
import { Element } from './elementsBase.js'


export class html extends Element {
    constructor() {
        this.element = ['<html>', '</html>']
        this.allow_childs = true;
    }
}

export class body extends Element {
    constructor() {
        this.element = ['<html>', '</html>']
        this.allow_childs = true;
    }
}

export class div extends Element {
    constructor() {
        this.element = ['<h1>', '</h1>']
        this.allow_childs = true;
    }
}

export class h1 extends Element {
    constructor() {
        this.element = ['<h1>', '</h1>']
        this.allow_childs = true;
    }
}
export class H2 extends Element {
    constructor() {
        this.element = ['<h2>', '</h2>']
        this.allow_childs = true;
    }
}
export class h3 extends Element {
    constructor() {
        this.element = ['<h3>', '</h3>']
        this.allow_childs = true;
    }
}
export class h4 extends Element {
    constructor() {
        this.element = ['<h4>', '</h4>']
        this.allow_childs = true;
    }
}

export class p extends Element {
    constructor() {
        this.element = ['<h2>', '</h1>']
        this.allow_childs = true;
    }
}

export class a extends Element {
    constructor(url, text) {
        this.element = ['<a>', '</a>']
        this.allow_childs = true;
        this.properties = ['href', url]
        
    }
}


export class button extends Element {
    constructor(text, fn) {
        this.element = ['<button>', '</button>']
        this.allow_childs = true;
        this.properties = ['href', url]
        this.childs = [text]
    }
}

export class nav extends Element {
    constructor(text, fn) {
        this.element = ['<nav>', '</nav>']
        this.allow_childs = true;
        this.properties = []
        this.childs = [text]
    }
}

export class ul extends Element {
    constructor(text, fn) {
        this.element = ['<nav>', '</nav>']
        this.allow_childs = true;
        this.properties = []
        this.childs = [text]
    }
}

export class li extends Element {
    constructor(text, fn) {
        this.element = ['<nav>', '</nav>']
        this.allow_childs = true;
        this.properties = []
        this.childs = [text]
    }
}

export class span extends Element {
    constructor(text, fn) {
        this.element = ['<nav>', '</nav>']
        this.allow_childs = true;
        this.properties = []
        this.childs = [text]
    }
}
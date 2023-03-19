

let elements_created = 0;

let active_ids = [];


class Element {
    element = [];
    element_id
    allow_childs = true;
    childs = [] // Elements string content will be added just as a string
    css_classes;

    // List of lists of 2 strings, one for property name and other for property value
    properties = [
        ['class', '']
    ]; // For example labels and inputs could contains: [['type', 'text'], ['for', 'name']]

    constructor() {
        elements_created++;
        this.element_id = elements_created;
        active_ids.push(this.element_id)
    }

    convertToString() {
        //Generateing element properties string
        var properties_string = '';
        this.properties.forEach(property => {
            properties_string += `${property[0]}="${property[1]}"`
        })
        
        // Adding element open tag and properties to it
        element_string = this.element[0]
        element_string = element_string.replace('>', ` ${properties_string} >`)
        
        // Add all the content that the element has
        this.childs.forEach(element => {
            if(typeof element === 'string')
                element_string +=  element
            else element_string +=  element.convertToString()
        })

        // Close and return the element
        element_string += this.element[1]
        return element_string
    }

    addChild(child, position) {
        childs
    }

    modifyId(child, id) {
        if(active_ids.includes(id)) {
            console.log('Already exists an element with that id')
            return 
        }
        child.id = id
    }
}

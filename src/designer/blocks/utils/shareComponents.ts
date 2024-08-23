import { website as website_store } from '$lib/stores/website';
import type { Website } from '$lib/interfaces/Website';
import type { Component, Editor } from 'grapesjs';


let website: Website

website_store.subscribe(new_website => website = new_website)


const generateRandomId = () => Math.random().toString(36).substring(2, 10);


export function saveComponentToStore(editor: Editor, component: Component) {

    let sharedComponentId = component.getAttributes()['shared-component']

    if(sharedComponentId)
        return
    
    sharedComponentId = generateRandomId()
    component.addAttributes({'shared-component': sharedComponentId})
    website_store.update(_website => {
        
        if (!_website.sharedComponents) {
            _website.sharedComponents = [sharedComponentId]
            
            return _website
        }

        _website.sharedComponents.push(sharedComponentId)
        
        return _website

    })

    editor.store();
}

export function removeComponentFromStore(editor: Editor, component: Component) {

    let sharedComponentId = component.getAttributes()['shared-component']

    if(!sharedComponentId) return;

    website_store.update(_website => {

        if (!_website.sharedComponents)
            return _website

        _website.sharedComponents =_website.sharedComponents.filter(_sharedComponentId => {
            return sharedComponentId != sharedComponentId
        })

        return _website
    })

    component.removeAttributes(['shared-component'])

    editor.store();
}



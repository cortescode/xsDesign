import type { Editor } from 'grapesjs';

export default (editor: Editor) => {
	const { Components } = editor;

    Components.addType("header", {
        isComponent: (el) => {
            return el.tagName == "NAV"
        },
        model: {

        },
        view: {
            
        }
    })
}
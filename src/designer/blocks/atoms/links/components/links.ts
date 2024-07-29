import type { Editor } from 'grapesjs';


export default function addLinks(editor: Editor) {
    const { Components } = editor;
	

	Components.addType("link", {
		extend: 'link',
		model: {
			defaults: {
				name: 'link',
				attributes: { 
					class: `basic-link`,
					href: "/"
				},
			},
		}
		
    });

	Components.addType("button-link", {
		extend: 'link',
		model: {
			defaults: {
				name: 'button-link',
				attributes: { 
					class: `basic-button-link`,
					href: "/"
				},
			},
		}
		
    });

}
import ToolbarElements from '$designer/blocks/toolbarElements';
import type { Editor } from 'grapesjs';


export default function addLinks(editor: Editor) {
    const { Components } = editor;

	const toolbarElements = new ToolbarElements(editor)

	const { exit, move, clone, remove, openLinkTraits }= toolbarElements
	

	Components.addType("link", {
		extend: 'link',
		model: {
			defaults: {
				name: 'link',
				toolbar: [exit, move, clone, remove, openLinkTraits],
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
				toolbar: [exit, move, clone, remove, openLinkTraits],
				attributes: { 
					class: `basic-button-link`,
					href: "/"
				},
			},
		}
		
    });

}
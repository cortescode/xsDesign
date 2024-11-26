import ToolbarElements from '$website/designer/blocks/toolbarElements';
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
				styles: `		
					.basic-link {
						box-sizing: border-box;
						font-size: 18px;
						text-decoration: none;
					}
				`
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
				styles: `		
					.basic-button-link {
						box-sizing: border-box;
						display: block;
						padding: 10px 20px;
						border-radius: 8px;
						background-color: rgb(36, 57, 214);
						color: white;
						font-size: 18px;
						text-decoration: none;
						margin: 0;
						width: fit-content;
					}

					.basic-button-link:hover {
						background-color: white;
						color: rgb(36, 57, 214);
						outline: 1px solid rgb(36, 57, 214);
					}
				`
			},
		}
		
    });

}
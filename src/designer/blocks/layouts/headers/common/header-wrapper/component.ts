import type { Editor } from 'grapesjs';

import { saveComponentToStore, removeComponentFromStore } from '$designer/blocks/utils/shareComponents';


export default (editor: Editor) => {

    const { Components } = editor;

	const headerWrapper = 'header-wrapper';
    

	Components.addType(headerWrapper, {
        isComponent: el => el.tagName == "header",
		model: {
			defaults: {
				droppable: true,
				name: 'Header',
				tagName: "header",
                traits: [{
                    id: "shareAcrossPages",
                    type: "checkbox",
                    label: "Share across pages",
                    name: "shareAcrossPages",
                }],
				attributes: {
					class: 'header-wrapper'
				},
                styles: `
                    .header-wrapper {
                        box-sizing: border-box;
                        width: 100%;
                        height: 80px;
                        background-color: white;
                        display: grid;
                        place-items: center;
                        padding: 10px;
                    }

                `,
            },
            init() {
                this.on('component:update', this.handleUpdate)
            },
            handleRemove() {
                removeComponentFromStore(editor, this)
            },
            //#tsIgnore
            handleUpdate() {
                const traitValue = this.traits.get('shareAcrossPages').getValue()
                
                if(traitValue){
                    saveComponentToStore(editor, this);
                } else {
                    removeComponentFromStore(editor, this)
                }
            }
        }
    })
}
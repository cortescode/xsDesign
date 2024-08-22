import type { Editor } from 'grapesjs';
import { saveComponentToStore, removeComponentFromStore } from '$designer/blocks/utils/shareComponents';

export default (editor: Editor) => {
	const { Components } = editor;

	const headerWrapper = 'header';
	const headerContent = `header-content`;
	const headerNav = `header-nav`;
	const mobileToggle = `mobile-toggle`;



	Components.addType(headerWrapper, {
		model: {
			defaults: {
                comparatorIdentifier: "header",
				droppable: true,
				name: 'Header',
				tagName: "header",
				components: { type: headerContent },
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
                        height: 100px;
                        background-color: white;
                        display: grid;
                        place-items: center;
                        padding: 10px;
                    }

                `,
            },
            init() {
                // this.on('trait:value', this.handleTraitChange);
                // this.on('remove', this.handleRemove)

                this.on('component:update', this.handleUpdate)
            },
            handleRemove() {
                removeComponentFromStore(editor, this)
            },
            //#tsIgnore
            handleUpdate() {
                const traitValue = this.traits.get('shareAcrossPages').getValue()
                console.log("traitValue: ", traitValue)
                if(traitValue){
                    saveComponentToStore(editor, this);
                } else {
                    removeComponentFromStore(editor, this)
                }
            }
        }
    })

    Components.addType(headerContent, {
        isComponent: el => el.tagName == "header",
        model: {
            defaults: {
                droppable: true,
                name: 'Header Content',
                tagName: 'div',
                attributes: {
                    class: 'header-content'
                },
                components: [
                    {
                        type: 'link',
                        content: 'YourWebsite.com'
                    },
                    {
                        type: headerNav
                    },
                    {
                        type: mobileToggle
                    }
                ],
                styles: `

                    .header-content {
                        width: 100%;
                        max-width: 1050px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }
                
                `
            }
        }
    })
}
import type { Editor } from 'grapesjs';


export default (editor: Editor) => {
	const { Components } = editor;

	const headerWrapper = 'header';
	const headerContent = `header-content`;
	const headerNav = `header-nav`;
	const mobileToggle = `mobile-toggle`;



	Components.addType(headerWrapper, {
		model: {
			defaults: {
				droppable: true,
				name: 'Header',
				tagName: "header",
				components: { type: headerContent },
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

                `
            }
        }
    })

    Components.addType(headerContent, {
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
import type { Editor } from 'grapesjs';


export default (editor: Editor) => {
	const { Components } = editor;

    const header = `default-header`
    const headerWrapper = `header-wrapper`
	const headerContent = `default-header-content`;
	const headerNav = `header-nav`;
	const mobileToggle = `mobile-toggle`;

    Components.addType(header, {
        extend: headerWrapper,
        model: {
            defaults: {
                components: {type: headerContent}
            }
        }
    })

    Components.addType(headerContent, {
        isComponent: el => el.parentElement?.tagName == "header",
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
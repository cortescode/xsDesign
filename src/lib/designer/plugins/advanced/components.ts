import type { Editor } from 'grapesjs';
import type { RequiredPluginOptions } from '.';

export default (editor: Editor, opts: RequiredPluginOptions) => {
    const { Components } = editor;
    const { id, label } = opts;

    // Listen to the 'component:selected' event
	editor.Commands.add('open-link', {
        run: function(editor) {
            let component = editor.getSelected()

			openModal(component)
        }
    });


    Components.addType("custom-link", {
		extend: 'link',
		model: {
			defaults: {
				name: 'link',
				attributes: { 
					class: `link`,
					href: "/"
				},
				toolbar: [
					{
						attributes: {class: 'fa fa-arrow-up'},
						command: 'select-parent'
					},
					{
						attributes: {class: 'fa fa-arrows'},
						command: 'tlb-move'
					},
					{
						attributes: {class: 'fa fa-clone'},
						command: 'tlb-clone',
					},
					{
						attributes: {class: 'fa fa-trash'},
						command: 'tlb-delete'
					},
					{
						attributes: {class: 'fa fa-link'},
						command: 'open-link'
					}
				]
			},
		}
		
    });

	// Listen to the 'component:add' event
    editor.on('component:add', (component) => {
		editor.select(component)
	})

	
	function openModal(component: any) {
		
		// Check if the added component is of type 'custom-link'
		if (component.get('type') !== 'custom-link')
			return
			
		// Obtain the link text to show it as default
		let textComponent = component.content
		if(!textComponent) {
			textComponent = component.components().models[0];
    		textComponent = textComponent ? textComponent.get('content') : '';
		} 
			

		
		const modalContent = `
			<label for="linkHref">Link Href:</label>
			<input id="linkHref" type="text" placeholder="Enter link Href" value="${component.attributes.attributes.href}">
			<br><br>
			<label for="linkText">Link Text:</label>
			<input id="linkText" type="text" placeholder="Enter link Text" value="${textComponent}">
			<br><br>
			<button id="saveLinkBtn" class="designer-button">Save</button>
		`;

		// Open the modal to modify the link text and href
		editor.Modal.open({
			title: "Modify link",
			content: modalContent,
			attributes: {
                class: 'small-modal',
              }
		})


		// FUNCTIONALITY ASSOCIATED TO THE MODAL TO MODIFY PROPERTIES

		// Obtain the modal html component to work on it
		let modal = editor.Modal.getContentEl()
		const saveLinkBtn = modal?.querySelector('#saveLinkBtn');
			
		// Obtaini when the save button is clicked
		saveLinkBtn?.addEventListener('click', () => {
			// Update href and text of the link component with the data provided

			let hrefElement: HTMLInputElement | null | undefined = modal?.querySelector('#linkHref')
			component.set('attributes', { 
				href: hrefElement?.value
			});

			let textElement: HTMLInputElement | null | undefined = modal?.querySelector('#linkHref')
			component.set('content', textElement?.value);

			
			editor.Modal.close(); // Close the modal once the properties are modified
		});

	}

}
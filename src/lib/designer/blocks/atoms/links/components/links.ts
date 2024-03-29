import type { Editor } from 'grapesjs';


export default function addLinks(editor: Editor) {
    const { Components } = editor;
    

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
				styles: `

				.basic-button-link {
					display: block;
					padding: 10px 20px;
					border-radius: 8px;
					background-color: rgb(36, 57, 214);
					color: white;
					font-size: 18px;
					text-decoration: none;
					margin: 10px auto;
					width: fit-content;
				}

				.basic-button-link:hover {
					background-color: white;
					color: rgb(36, 57, 214);
				}
				
				`,
			},
		}
		
    });

	// Listen to the 'component:add' event
    editor.on('component:add', (component) => {
		editor.select(component)
	})

	
	function openModal(component: any) {
		// Check if the added component is of type 'custom-link'
		if (component.get('type') !== 'custom-link' && component.get('type') !== 'button-link')
			return
			
		// Obtain the link text to show it as default
		let textComponent = component.content
		if(!textComponent) {
			textComponent = component.components().models[0];
    		textComponent = textComponent ? textComponent.get('content') : '';
		} 
			
		const componentStyles = component.getStyle();
		const currentDecoration = componentStyles['text-decoration'] || 'none';
		
		
		const modalContent = `
			<label for="linkHref">Link Href:</label>
			<input id="linkHref" type="text" placeholder="Enter link Href" value="${component.attributes.attributes.href}">
			<br><br>
			<label for="linkText">Link Text:</label>
			<input id="linkText" type="text" placeholder="Enter link Text" value="${textComponent}">
			<br><br>
			<div style="display: grid; grid-template-columns: auto 1fr; gap: 20px; align-items: center; justify-items: flex-start;">
				<label for="toggleTextDecoration"><u>Underline:</u> </label>
				<input style="display: inline-block; width: 30px; cursor: pointer;" id="toggleTextDecoration" type="checkbox" ${currentDecoration === 'underline' ? 'checked' : ''}>
			</div>
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

			let textElement: HTMLInputElement | null | undefined = modal?.querySelector('#linkText')
			component.set('content', textElement?.value);

			// Update text-decoration based on the checkbox
			let textDecorationCheckbox: HTMLInputElement | null | undefined = modal?.querySelector('#toggleTextDecoration');
			if (textDecorationCheckbox?.checked) {
				component.addStyle({ 'text-decoration': 'underline' });
			} else {
				component.addStyle({ 'text-decoration': 'none' });
			}
			
			editor.Modal.close(); // Close the modal once the properties are modified
		});


	}

}
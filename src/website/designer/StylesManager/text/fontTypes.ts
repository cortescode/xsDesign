import type { Component, Editor, StyleProps } from "grapesjs";


export default function loadFontTypes(editor: Editor) {
	const { StyleManager } = editor;

	const selector = '.font-family-selector'

	const fonts = [
		"Comfortaa",
		"Platypi",
		"Tilt Neon",
		"Lilita One",
		"Plus Jakarta Sans",
		"Satisfy",
		"Signika Negative",
		"Lobster",
		"Noto Serif",
		"Bevan"
	]

	
	StyleManager.addType('family', {
		// Create UI
		selectedComponent: editor.getSelected()?.getEl(),
		currentFont: "Comfortaa",
		create({ props, change }) {
			if(!this.selectedComponent)
				this.selectedComponent = editor.getSelected()?.getEl()

			const el = document.createElement('div');

			// Template with the Html Component
			let htmlTemplate = `
			<div class="font-family-selector">
				<div class="font-family-selected">
					Select your font
				</div>
				<div class="font-family-options-wrapper">
					<div class="font-family-options">
						<!-- <div class="family-option" value="{font}">{font}</div> -->
						[OPTIONS]
					</div>
				</div>
			</div>
			`
			// Adds the different options to the template
			let optionsTemplate = ''
			fonts.forEach(font => optionsTemplate += `<div value="${font}" class="family-option">${font}</div>`)

			// Add the options to the main template
			htmlTemplate = htmlTemplate.replace("[OPTIONS]", optionsTemplate)

			// Adding the template to the component
			el.innerHTML = htmlTemplate


			const fontFamilySelector = el.querySelector(selector);

			fontFamilySelector?.addEventListener('mouseover', event => {
				const selectOption = el.querySelector(".font-family-options") as HTMLElement
				selectOption.style.display = "block"

				const selectOptionEls = el.querySelectorAll(".family-option")


				selectOptionEls.forEach(optionEl => {
					optionEl.addEventListener('mouseover', (event) => {
						// @ts-ignore
						let font = (event?.target as HTMLElement).getAttribute("value") || "Arial Black"
						
						if(this.selectedComponent)
							this.selectedComponent.style.fontFamily = font
					})
					optionEl.addEventListener('mouseout', (event) => {
						// @ts-ignore
						let font = (event?.target as HTMLElement).getAttribute("value")|| "Arial Black"

						if(this.selectedComponent)
							this.selectedComponent.style.fontFamily = this.currentFont
					})
					optionEl.addEventListener('click', (event) => {
						// @ts-ignore
						let font = (event?.target as HTMLElement).getAttribute("value")
						if (font) {
							change({ event }, {partial: true});
							const selectOption = el.querySelector(".font-family-options") as HTMLElement
							selectOption.style.display = "none"

						}

					})
				})
			});
			fontFamilySelector?.addEventListener('mouseout', event => {
				const selectOption = el.querySelector(".font-family-options") as HTMLElement
				selectOption.style.display = "none"

			})

			return el;
		},
		// Propagate UI changes up to the targets
		emit({ props, updateStyle }, { event, partial }) {
			let font = (event?.target as HTMLElement).getAttribute("value") || "Arial Black"

			updateStyle({'font-family': font}, { partial });
		},
		// Update UI when the target is changed or font family is updated
		update({ value, el }) {
			// Check the params are introduced
			if (!el || !value) return

			this.selectedComponent = editor.getSelected()?.getEl()
			if(this.selectedComponent)
				this.selectedComponent.style.fontFamily = value
			this.currentFont = value;

			// Update selector UI to show the new font
			let selectedFontDiv = el.querySelector(".font-family-selected") as HTMLElement
			if (selectedFontDiv) selectedFontDiv.innerHTML = value
		},
		// Clean the memory from side effects if necessary (eg. global event listeners, etc.)
		destroy() { }
	})

}



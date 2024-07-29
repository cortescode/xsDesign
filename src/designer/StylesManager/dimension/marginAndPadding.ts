import type { Component, Editor, StyleProps } from "grapesjs";
import getComponentStyles from "../utils/getStyles";

const styleProps = ['margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'];

export default function loadMarginAndPaddingInput(editor: Editor) {
    const { StyleManager } = editor;

    const updateStyles = () => {
        const marginAndPaddingType = StyleManager.getType('margin-and-padding');
        marginAndPaddingType.update();
    }

    // Update Stylemanager property when the selected component changes
    // so it reflects current 
    editor.on('component:selected', (component: Component) => {
        updateStyles()

        // Close any property box opened
        setTimeout(() => {
            let propertyBoxes = document.querySelectorAll(".property-box") as NodeListOf<HTMLElement>;
            propertyBoxes.forEach(element => {
                element.style.display = "none";
            })
        }, 200)
    })

    editor.on('selector:add', () => updateStyles());

    editor.on('selector:remove', () => updateStyles());

    editor.on('selector:update', () => updateStyles());

    editor.on('selector:state', () => updateStyles());

    StyleManager.addType('margin-and-padding', {
        create({ props, change }) {
            // @ts-ignore
            this.units = props.units || [
                'px',
                '%',
                'vh',
                'vw',
            ]

            const el = document.createElement('div');
            el.classList.add('margin-and-padding-input');
            styleProps.forEach((property) => {
                el.innerHTML += inputHtmlTemplate(property)
            })

            const propertyElements = el?.querySelectorAll('.margin-padding')

            propertyElements.forEach(element => {
                // margin-top, margin-bottom, padding-right...
                const property = element.id;


                element.addEventListener('click', () => {
                    let propertyBox = element.querySelector(".property-box") as HTMLElement
                    // Close any other open property boxes
                    document.querySelectorAll('.property-box').forEach(box => {
                        let htmlBox = box as HTMLElement;
                        if (htmlBox !== propertyBox) {
                            htmlBox.style.display = "none";
                        }
                    });
                    propertyBox.style.display = "grid"
                } )



                // margin-top, margin-bottom, padding-right...
                const input = element?.querySelector('input');


                const triggerChange = (event: Event, partial: boolean = false) => {
                    const target = event.target as HTMLInputElement;
                    const unitElement = element?.querySelector('select') as HTMLSelectElement;
                    const unit = unitElement?.value;
                    let value = target?.value ? `${target.value}${unit}` : '0';
                
                    change({
                        value: value,
                        styleName: property,
                        partial: partial,
                    });
                
                    // Immediately update the StyleManager
                    const marginAndPaddingType = StyleManager.getType('margin-and-padding');
                    marginAndPaddingType.update();
                }
                
                input?.addEventListener('change', event => triggerChange(event));
                input?.addEventListener('input', event => triggerChange(event, true));

                const select = element?.querySelector('select');

                select?.addEventListener('change', event => {
                    const target = event.target as HTMLInputElement
                    const unit = target.value
                    const inputEl = element?.querySelector('input') as HTMLInputElement;
                    let value = `${inputEl.value?inputEl.value:0}${unit?unit:"px"}`

                    change({
                        value: value,
                        styleName: property,
                    })

                }
                );

                // add the respective inputs for each predefined option for margin and padding
                const buttons = element?.querySelectorAll('.set-value-button');
                buttons.forEach(button => {
                    button.addEventListener("click", () => {
                        if(button.innerHTML === "auto")
                            change({
                                value: button.innerHTML,
                                styleName: property,
                            })
                        else {
                            const unitElement = element?.querySelector('select') as HTMLSelectElement;
                            const unit = unitElement?.value
                            change({
                                value: button.innerHTML + unit,
                                styleName: property,
                            })
                        }

                        updateStyles()
                            
                    })
                })

            })

            // Add a document click event listener to close the property box when clicking outside
            document.addEventListener('click', (event) => {
                propertyElements.forEach(element => {
                    let propertyBox = element.querySelector(".property-box") as HTMLElement;
                    if (!element.contains(event.target as Node)) {
                        propertyBox.style.display = "none";
                    }
                });
            });

            return el;
        },

        emit({ props, updateStyle }, { value, styleName, partial }) {
            updateStyle({ [styleName]: value }, { partial });
        },

        update() {
            // Update UI so it reflects margin and padding changes

            const component = editor.getSelected()
            if (!component) return

            let style = stractMarginAndPadding(component, editor)

            styleProps.forEach(prop => {
                const wrapper = document.getElementById(`${prop}`) as HTMLInputElement

                // HTML Elements
                const inputElement = wrapper?.querySelector('input')
                const pElement = wrapper?.querySelector('p')
                const selectElement = wrapper?.querySelector('select')
                let value = style[prop]


                if(pElement)
                    pElement.innerHTML = value || "auto";

                if (inputElement) {
                    if(value === "auto")
                        inputElement.value = "auto";
                    else {
                        let inputValue = value?.match(/-?\d+(\.\d+)?/g)?.map(Number);
                        inputElement.value = inputValue || 0;
                    }
                }
                if(selectElement) {
                    if(value === "auto") value = "px"

                    let unit = value?.replace(/[\d\.\-\+]+/g, '');
                    selectElement.value = unit || "px";
                }
            })
        },
        destroy() {
        }
    });

}


/**
   * Create a template that contains an <input > for property value and a <select> for units allowed
   * @param  {String} property  The css property the template is atached to.
   * @param  {String} units   The units allowed in the select.
   * @return {String} The template once created
*/
const inputHtmlTemplate = (property: string, units: string[] = [
    'px',
    '%',
    'vw',
    'vh',
], unit: string = 'px') => {

    let selectOptionsHtml = ''
    units.forEach((_unit) => {
        selectOptionsHtml += `
            <option value="${_unit}" ${_unit === unit ? 'selected' : ''}>
                ${_unit}
            </option>
        `
    })

    // Determine wether the property relates to 'margin' or 'padding' by applying a filter
    let globalProperty = property.includes('margin') ? 'margin' : 'padding'


    let propertyName = property.replace("-", " ")

    // Return the template for each individual property
    return `
    <div id="${property}" class="${property} margin-padding">
        <p>0</p>
        <div class="property-box">
            <p class="gradient-text">${propertyName}</p>
            <div class="property-input-wrapper">
                <input type="number" class="${globalProperty}-input" placeholder="0">
                <select id="${property}-select">
                    ${selectOptionsHtml}
                </select>
            </div>
            <div class="property-buttons-wrapper">
                <button class="set-value-button">auto</button>
                <button class="set-value-button">0</button>
                <button class="set-value-button">10</button>
                <button class="set-value-button">20</button>
                <button class="set-value-button">50</button>
                <button class="set-value-button">100</button>
            </div>
        </div>
    </div>
    `
}


/**
   * Extract "margin-top, margin-right..." from "margin" property. Do the same with padding
   * @param  {Component} style  The css style of the component
   * @return {Record<String, String>} The new style with margin and padding properties extracted
*/
function stractMarginAndPadding(component: Component, editor: Editor): any {

    let styles = getComponentStyles(component, editor)


    for(const [key, value] of Object.entries(component.getStyle())) {
        if(key in styles) {
            styles[key] = value
        }
    }
 
    let style: Record<string, string | string[]> = {}

    const marginProperties = [
        "margin-top", "margin-right", "margin-bottom", "margin-left"
    ]

    marginProperties.forEach((property, index) => {
        if(styles[property] != null) {
            style[property] = styles[property]
        }
    })


    const paddingProperties = [
        "padding-top", "padding-right", "padding-bottom", "padding-left"
    ]

    paddingProperties.forEach((property, index) => {
        if(styles[property] != null) {
            style[property] = styles[property]
        }
    })


    return style
}

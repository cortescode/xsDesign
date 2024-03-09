import type { Component, Editor, StyleProps } from "grapesjs";


const styleProps = ['margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'];

export default function loadMarginAndPaddingInput(editor: Editor) {
    const { StyleManager } = editor;

    // Update Stylemanager property when the selected component changes
    editor.on('component:selected', (component: Component) => {
        const marginAndPaddingType = StyleManager.getType('margin-and-padding')
        marginAndPaddingType.update();
    })

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

            const propertyElements = el.querySelectorAll('div')
            propertyElements.forEach(element => {

                const property = element.id;

                const input = element.querySelector('input');

                input?.addEventListener('change', event => {

                    const target = event.target as HTMLInputElement
                    const unitElement = element.querySelector('select') as HTMLSelectElement;
                    const unit = unitElement.value
                    let value = target?.value ? `${target.value}${unit}` : '0'

                    change({
                        value: value,
                        styleName: property,
                    })
                });

                input?.addEventListener('input', event => {
                    const target = event.target as HTMLInputElement
                    const unitElement = element.querySelector('select') as HTMLSelectElement;
                    const unit = unitElement.value
                    let value = target?.value ? `${target.value}${unit}` : '0'

                    change({
                        value: value,
                        styleName: property,
                        partial: true
                    })
                });

                const select = element.querySelector('select');

                select?.addEventListener('change', event => {
                    const target = event.target as HTMLInputElement
                    const unit = target.value
                    const inputEl = element.querySelector('input') as HTMLInputElement;
                    let value = `${inputEl.value?inputEl.value:0}${unit?unit:"px"}`

                    change({
                        value: value,
                        styleName: property,
                    })
                }
                );


            })

            return el;
        },

        emit({ props, updateStyle }, { value, styleName, partial }) {
            updateStyle({ [styleName]: value }, { partial });
        },

        update() {
            const component = editor.getSelected()
            if (!component) return

            let el = component?.getEl()
            let style: any = component?.getStyle();
            let computedStyle  = el ? window.getComputedStyle(el) : null

            if (!style) return

            style = stractIndividualProperties(style)

            styleProps.forEach(prop => {
                const wrapper = document.getElementById(`${prop}`) as HTMLInputElement

                const inputElement = wrapper.querySelector('input')

                const selectElement = wrapper.querySelector('select')
                if (inputElement) {
                    let value;

                    if(style[prop]) 
                         value = style[prop].match(/-?\d+(\.\d+)?/g)?.map(Number);
                    else if(computedStyle && computedStyle.getPropertyValue(prop))
                        value = computedStyle.getPropertyValue(prop).match(/-?\d+(\.\d+)?/g)?.map(Number);

                    inputElement.value = value || 0;
                }

                if(selectElement) {
                    let unit;
                    if(style[prop]) 
                        unit = style[prop].replace(/[\d\.\-\+]+/g, '');
                    else if(computedStyle && computedStyle.getPropertyValue(prop))
                        unit = computedStyle.getPropertyValue(prop).replace(/[\d\.\-\+]+/g, '');

                    selectElement.value = unit || "px";
                }
            })
        },
        destroy() {
        }
    });

}


/**
   * Create a template that contains an <input >for property value and a <select> for units allowed
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
    let global_property = property.includes('margin') ? 'margin' : 'padding'

    // Return the template
    return `
    <div id="${property}" class="${property}">
        <input type="number" class="${global_property}-input" placeholder="0">
        <select id="${property}-select">
            ${selectOptionsHtml}
        </select>
    </div>
    `
}


/**
   * Extract "margin-top, margin-right..." from "margin" property. Do the same with margin
   * @param  {String} property  The css property the template is atached to.
   * @return {any} The new
*/
function stractIndividualProperties(style: StyleProps): any {
    const margin: any = style["margin"]
    const padding: any = style["padding"]

    if(margin)
    {
        const marginValues = margin.trim().split(" ")

        let valuesLength = marginValues?.length

        const marginProperties = [
            "margin-top", "margin-right", "margin-bottom", "margin-left"
        ]

        marginProperties.forEach((property, index) => {
            style[property] = marginValues [index % valuesLength ]
        })
    } 

    if(padding)
    {
        const paddingValues = padding.trim().split(" ")

        let valuesLength = paddingValues?.length

        const paddingProperties = [
            "padding-top", "padding-right", "padding-bottom", "padding-left"
        ]

        paddingProperties.forEach((property, index) => {
            style[property] = paddingValues [index % valuesLength ]
        })
    }

    return style
}
import type { Component, Editor } from "grapesjs";

export default function loadMarginAndPaddingInput(editor: Editor) {
    const { StyleManager } = editor;

    const styleProps = ['margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'];

    // Update Stylemanager property when the selected component changes
    editor.on('component:selected', (component: Component) => {
        const marginAndPaddingType = StyleManager.getType('margin-and-padding')
        marginAndPaddingType.update();
    })

    // Create the template shown in the stylemanager section for 
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
                console.log("propertyElement id: ", element.id)

                const property = element.id;

                const input = element.querySelector('input');

                input?.addEventListener('change', event => {

                    const target = event.target as HTMLInputElement
                    const unitElement = element.querySelector('select') as HTMLSelectElement;
                    const unit = unitElement.value
                    let value = target?.value ? `${target.value}${unit}` : '0'

                    console.log("input value change: ", value)
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

                    console.log("input value input: ", value)
                    change({
                        value: value,
                        styleName: property,
                        partial: true
                    })
                });

                const select = element.querySelector('select');

                select?.addEventListener('change', event => {
                    console.log("select change")

                    const target = event.target as HTMLInputElement
                    const unit = target.value
                    const inputEl = element.querySelector('input') as HTMLInputElement;
                    let value = inputEl?.value ? `${inputEl.value}${unit}` : '0'

                    console.log("select value: ", value)
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

            const style: any = component?.getStyle();

            if (!style) return

            styleProps.forEach(prop => {
                const wrapper = document.getElementById(`${prop}`) as HTMLInputElement

                const inputElement = wrapper.querySelector('input')

                const selectElement = wrapper.querySelector('select')
                if (inputElement) {
                    const value = style[prop]?.match(/-?\d+(\.\d+)?/g)?.map(Number);
                    inputElement.value = value;
                }

                if(selectElement) {
                    const unit = style[prop].replace(/[\d\.\-\+]+/g, '');
                    console.log("unit: ", unit)
                    selectElement.value = unit;
                }
            })
        },
        destroy() {
            console.log("destroy");
        }
    });

}

import type { Editor } from 'grapesjs'


export default function addHeroComponents(editor: Editor) {

    const { Components } = editor
    Components.addType("section", {
        model: {
            defaults: {
                name: 'Section',
                tagName: 'section',
                type: "grid",
                attributes: {
                    class: `default-section`,
                },
                style: {
                    "display": "grid",
                    "box-sizing": "border-box",
                    "width": "100%",
                    "min-height": "140px"
                },
            },
        }
    })
}
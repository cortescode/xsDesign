import { openTraitsEvent } from '$lib/designer/traits';
import type { Component, Editor } from 'grapesjs'



export default function loadTextComponents(editor: Editor) {

    const components = editor.Components

    // Set component tagName and refresh component view to update on html
    function setComponentTag(component: Component, tagName: string) {
        component.set('tagName', tagName);
        component.updateTrait('tag', {
            default: tagName
        })
        component.view?.render();
    }


    components.addType('simple-text', {
        extend: 'text',
        isComponent: el => ["p", "span", "quote"].includes(el.tagName),
        model: {
            defaults: {
                name: 'text',
                tagName: "p",
                traits: [
                    "id",
                    {
                        id: 'tag',
                        type: 'select', 
                        label: 'Html Tag',
                        name: 'tagName',
                        options: [
                            { id: 'p', name: 'p' },
                            { id: 'span', name: 'span' },
                            { id: 'blockquote', name: 'blockquote' },
                        ]
                    },
                ],
            },
            editable: true,
            // Function to run when the model's init event is triggered
            init() {
                this.on('change:attributes:tagName', (model: any, tagName: string) => {
                    setComponentTag(this, tagName)
                },);
            },
        },
    });


    components.addType('title', {
        extend: 'text',
        isComponent: el => ["H1", "H2", "H3", "H4", "H5", "H6"].includes(el.tagName),
        model: {
            defaults: {
                name: 'title',
                tagName: 'H1',
                traits: [
                    "id",
                    {
                        id: 'tag',
                        type: 'select', // Use a select box for tag name options
                        label: 'Heading',
                        name: 'tagName', // This will change the tag name of the component
                        default: 'H1',
                        options: [
                            { id: 'H1', name: '1' },
                            { id: 'H2', name: '2' },
                            { id: 'H3', name: '3' },
                            { id: 'H4', name: '4' },
                            { id: 'H5', name: '5' },
                            { id: 'H6', name: '6' },
                        ],
                    },
                ],
                attributes: {
                    class: "h1"
                },
                style: {
                    "margin-top": "20px",
                    "margin-bottom": "20px",
                },
                editable: true
            },

            init() {
                this.on('change:attributes:tagName', (model: any, tagName: string) => {
                    setComponentTag(this, tagName)
                },);

                // Update the title tag to set the default title tag depends on position inside screen
                editor.on('component:add', component => {
                    if (component === this) 
                        document.dispatchEvent(openTraitsEvent)
                });
            },


        },
    });
}



/* 

            getTitleDepth(component: Component) {
                let depth = 0;
                let parent = component.parent();
                
                while (parent && parent.get('tagName') !== 'BODY') {
                    depth++;
                    parent = parent.parent();
                }
                
                return depth;
            },
            
                * Recursive function to set th
                * @param  {Component} component The title component.
                * @param  {number} currentTitleTag The current title tag during the recursive calls
             
            setDefaultTitleTag(component: Component, currentTitleTag: number = 1) {
                const depth = this.getTitleDepth(component)
                
                console.log("Depth: ", depth)

                if(depth <= 4) 
                    this.setTitleTagByPosition(component)
                else
                    this.setTitleTagByDepth(component)

            },

            setTitleTagByPosition(component: Component, currentTitleTag: number = 1) {
                // Check if there's any title tag before this component

                let pageWrapperComponent = editor?.Components?.getWrapper()
                
                if(!pageWrapperComponent)
                    return

                const allTitles = pageWrapperComponent.find(`H${ currentTitleTag }`);
                let shouldChange = false;

                let componentEl = component.getEl()
                let componentTop = component.getEl()?.getBoundingClientRect().top


                for(let title of allTitles) {
                    let titleTop = title.getEl()?.getBoundingClientRect().top

                    if (!titleTop || !componentTop)
                        return;
                
                    if(titleTop < componentTop) {
                        shouldChange = true;
                        break;
                    }
                }
        
                if (shouldChange && currentTitleTag < 6) {
                    this.setDefaultTitleTag(component, currentTitleTag+1)
                } else {
                    setComponentTag(component, `H${ (currentTitleTag ) }`);
                }
            },

            setTitleTagByDepth(component: Component) {
                const parentEl = component.parent()?.getEl()
                if(!parentEl) {
                    setComponentTag(component, 'H3')
                    return
                }

                let closest_title = parentEl.closest("h1, h2, h3, h4, h5, h6")

                console.log("CLosest title: ", closest_title)

                const tagName = closest_title?.tagName

                console.log("tagName: ", tagName)

                if(tagName)
                    setComponentTag(component, tagName)
                else setComponentTag(component, 'H3')

            }

*/
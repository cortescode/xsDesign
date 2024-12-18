import type { Editor } from 'grapesjs';
import ToolbarElements from '$designer/blocks/toolbarElements';

export default (editor: Editor) => {
    const { Components, Blocks } = editor;


    const navClass = 'header-nav';
    const navId = 'header-nav'

    const toolbarElements = new ToolbarElements(editor)

    const { exit, move, clone, remove } = toolbarElements

    Components.addType("header-nav", {
        isComponent: (el) => el.id == navId,
        model: {
            defaults: {
                tagName: "nav",
                attributes: { class: 'header-nav', id: 'header-nav' },
                traits: [
                ],
                toolbar: [exit, move, clone, remove],
                components: `
                    <ul class="header-nav--list">
                        <li class="header-nav--item">
                            <a class="header-nav--link" href="#home">Home</a>
                        </li>
                        <li class="header-nav--item">
                            <a class="header-nav--link" href="#about">About</a>
                        </li>
                        <li class="header-nav--item">
                            <a class="header-nav--link" href="#services">Services</a>
                        </li>
                        <li class="header-nav--item">
                            <a class="header-nav--link" href="#contact">Contact</a>
                        </li>
                    </ul>
                `,
                styles: `
                    .header-nav {
                        padding: 10px;
                    }
                    .header-nav--list {
                        list-style-type: none;
                        padding: 0;
                        margin: 0;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }
                    .header-nav--item {
                        margin: 0 10px;
                    }
                    .header-nav--link {
                        text-decoration: none;
                        color: #333;
                        font-size: 18px;
                    }
                    @media (max-width: 768px) {
                        .header-nav {
                            display: none;
                            position: absolute;
                            width: 100%;
                            top: 60px; /* Adjust based on your header height */
                            left: 0;
                            right: 0;
                            z-index: 1000;
                        }
                        .header-nav.show {
                            display: block;
                        }
                        .header-nav--list {
                            flex-direction: column;
                        }
                        .header-nav--item {
                            margin: 10px 0;
                        }
                    }
                `,
            }
        },
        view: {
            onRender({ el }) {

                if (!el.classList.contains(navClass))
                    el.classList.add(navClass);
                
                if (el.id != navId)
                    el.id = navId
            },
        }
    });

    Blocks.add('header-nav', {
        media: `
            <svg class="svg-icon" viewBox="0 0 20 20">
				<path d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"></path>
			</svg>
        `,
        label: 'Header Nav',
        category: 'NAVBARS',
        content: { type: 'header-nav' },
    });

};
import type { Editor } from 'grapesjs';

export default (editor: Editor) => {
    const { Components, Blocks } = editor;

    Components.addType("mobile-toggle", {
        isComponent: (el) => el.tagName === "BUTTON" && el.classList.contains('toggle-nav'),
        model: {
            defaults: {
                tagName: "button",
                attributes: { class: 'toggle-nav' },
                traits: [],
                script: function() {
                    const nav = document.querySelector('.header-nav');
                    const toggleBtn = this;
                    toggleBtn.addEventListener('click', () => {
                        nav?.classList.toggle('show');
                        toggleBtn.classList.toggle('open');
                    });
                },
                'script-props': ['nav'],
                content: '<span></span><span></span><span></span>',
                styles: `
                    .toggle-nav {
                        display: none;
                        flex-direction: column;
                        justify-content: space-around;
                        width: 40px;
                        height: 40px;
                        padding: 10px;
                        background: transparent;
                        border: none;
                        border-radius: 50%;
                        background-color: white;
                        cursor: pointer;
                    }
                    .toggle-nav span {
                        width: 20px;
                        height: 4px;
                        background: #333;
                        border-radius: 2px;
                        transition: all 0.3s linear;
                    }
                    .toggle-nav.open span:nth-child(1) {
                        transform: rotate(45deg) translate(5px, 5px);
                    }
                    .toggle-nav.open span:nth-child(2) {
                        opacity: 0;
                    }
                    .toggle-nav.open span:nth-child(3) {
                        transform: rotate(-45deg) translate(5px, -4px);
                    }
                    @media (max-width: 768px) {
                        .toggle-nav {
                            display: flex;
                        }
                        nav {
                            display: none;
                        }
                        nav.show {
                            display: block;
                        }
                    }
                `,
            }
        },
        view: {
            onRender({ el }) {
                const toggleClass = 'toggle-nav';
                if (!el.classList.contains(toggleClass)) {
                    el.classList.add(toggleClass);
                }
            },
        }
    });

    Blocks.add('toggle', {
        media: `
            <svg class="svg-icon" viewBox="0 0 20 20">
                <path d="M10,1.445c-4.726,0-8.555,3.829-8.555,8.555c0,4.725,3.829,8.555,8.555,8.555c4.725,0,8.555-3.83,8.555-8.555C18.555,5.274,14.725,1.445,10,1.445 M10,17.654c-4.221,0-7.654-3.434-7.654-7.654c0-4.221,3.433-7.654,7.654-7.654c4.222,0,7.654,3.433,7.654,7.654C17.654,14.221,14.222,17.654,10,17.654 M14.39,10c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,9.55,14.39,9.752,14.39,10 M14.39,12.702c0,0.247-0.203,0.449-0.45,0.449H6.06c-0.248,0-0.45-0.202-0.45-0.449c0-0.248,0.203-0.451,0.45-0.451h7.879C14.187,12.251,14.39,12.454,14.39,12.702 M14.39,7.298c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,6.848,14.39,7.051,14.39,7.298"></path>
            </svg>
        `,
        label: 'Toggle Nav',
        category: 'NAVBARS',
        content: { type: 'mobile-toggle' },
    });
};
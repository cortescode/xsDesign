import type { Editor } from 'grapesjs';

export default (editor: Editor) => {
	const { Components } = editor;

	const navbarPfx = 'navbar';
	const idContainer = `navbar-container`;
	const idNavMenu = `navbar-menu`;
	const idBurgerMenu = `navbar-burger-menu`;

	editor.on('selector:add', (selector) => {
		// Check if the selector matches the component type for which you want to apply class-based selection
		let selectedComponent = editor.getSelected()

		if (selectedComponent && selectedComponent.get('type') === navbarPfx) {
			selector.setLabel(navbarPfx)
		}
	});
	

	Components.addType(navbarPfx, {
		model: {
			defaults: {
				droppable: false,
				name: 'Header',
				tagName: "nav",
				components: { type: idContainer },
				attributes: {
					class: navbarPfx
				},
				traits: ["id",
					{
						type: 'checkbox',
						name: 'bgOnScroll',
						label: 'Transparent on Top of Page',
						valueTrue: 'YES', // Value to assign when is checked, default: `true`
						valueFalse: 'NO', // Value to assign when is unchecked, default: `false`

					},
				],
				init: function () {
					// @ts-ignore
					this.on("change:attributes:bgOnScroll", () => {
						// @ts-ignore
						const component = this as HTMLElement;
						const label = component?.attributes?.getNamedItem("bgOnScroll")

						if (label && label.value === "YES") {
							if (window.scrollY < 280)
								component.classList.add("transparent-bg")
							else
								component.classList.remove("transparent-bg")
						}
					})
				},
				script: function () {
					// @ts-ignore
					const component = this as HTMLElement;
					function addListener() {
						document.addEventListener("scroll", () => {
							const label = component?.attributes?.getNamedItem("bgOnScroll")

							if (label && label.value === "YES") {
								if (window.scrollY < 280)
									component.classList.add("transparent-bg")
								else
									component.classList.remove("transparent-bg")
							}
						})
					}
					const label = component?.attributes?.getNamedItem("bgOnScroll")

					if (label && label.value === "YES") {
						if (window.scrollY < 280)
							component.classList.add("transparent-bg")
						else
							component.classList.remove("transparent-bg")
					}
					if (component)
						addListener()
				}
			},
		}
	});

	Components.addType(idContainer, {
		model: {
			defaults: {
				attributes: { class: `${navbarPfx}-container`, 'data-gjs': 'navbar' },
				name: 'Navbar Container',
				/* droppable: false,
				draggable: false,
				removable: false,
				badgable: false,
				copyable: false, */
				components: [
					{
						attributes: { class: `${navbarPfx}-brand-wrapper` },
						locked: false,
						components: [
							{
								type: 'link',
								locked: false,
								content: 'yourwebsite.com',
								attributes: { class: `${navbarPfx}-brand`, href: '/' },
							}
						]
					},
					{
						locked: false,
						components: [
							{ type: idBurgerMenu },
							{
								attributes: {
									class: `${navbarPfx}-items-mobile`,
									'data-gjs': 'navbar-items-mobile'
								},
								components: { type: idNavMenu },
							},
							{
								attributes: {
									class: `${navbarPfx}-items-c`,
									'data-gjs': 'navbar-items'
								},
								components: { type: idNavMenu },
							}

						]
					}
				],
				traits: ["id",
					{
						type: 'checkbox',
						name: 'bgOnScroll',
						label: 'Transparent on Top of Page',
						valueTrue: 'YES', // Value to assign when is checked, default: `true`
						valueFalse: 'NO', // Value to assign when is unchecked, default: `false`

					},
				],
				init: function () {
					// @ts-ignore
					this.on("change:attributes:bgOnScroll", () => {
						// @ts-ignore
						const component = this as HTMLElement;
						const label = component?.attributes?.getNamedItem("bgOnScroll")

						if (label && label.value === "YES") {
							if (window.scrollY < 280)
								component.classList.add("transparent-bg")
							else
								component.classList.remove("transparent-bg")
						}
					})
				},
				script: function () {
					// @ts-ignore
					const component = this as HTMLElement;
					function addListener() {
						document.addEventListener("scroll", () => {
							const label = component?.attributes?.getNamedItem("bgOnScroll")

							if (label && label.value === "YES") {
								if (window.scrollY < 280)
									component.classList.add("transparent-bg")
								else
									component.classList.remove("transparent-bg")
							}
						})
					}
					const label = component?.attributes?.getNamedItem("bgOnScroll")

					if (label && label.value === "YES") {
						if (window.scrollY < 280)
							component.classList.add("transparent-bg")
						else
							component.classList.remove("transparent-bg")
					}
					if (component)
						addListener()
				}
			}
		}
	});

	Components.addType(idNavMenu, {
		model: {
			defaults: {
				name: 'Navbar Menu',
				tagName: 'nav',
				/* selectable: false,
				badgable: true,
				locked: false, */
				attributes: { class: `${navbarPfx}-menu` },
				components: [
					{
						type: "link",
						components: 'Home',
						attributes: {
							class: `${navbarPfx}-menu-link`,
						}
					},
					{
						type: "link",
						components: 'About',
						attributes: {
							class: `${navbarPfx}-menu-link`,
						}
					},
					{
						type: "link",
						components: 'Contact',
						attributes: {
							class: `${navbarPfx}-menu-link`,
						}

					},
				]
			},
		}
	});

	Components.addType(idBurgerMenu, {
		model: {
			defaults: {
				name: 'Burger',
				/* draggable: false,
				droppable: false,
				copyable: false,
				removable: false,
				badgable: false, */
				attributes: { class: `${navbarPfx}-burger` },
				components: `
				<svg class="svg-icon" viewBox="0 0 20 20">
					<path fill="inherit" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
						c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
						s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
						c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
				</svg>
				`,
				script: function () {
					// @ts-ignore
					const currentEl = this as HTMLElement;
					const stringCollapse = 'gjs-collapse';
					const clickEvent = 'click';

					let open: boolean = false;

					function toggle(ev: Event) {
						ev.preventDefault();
						const navParent = currentEl.closest(`[data-gjs=navbar]`);
						const navItems = navParent?.querySelector(`[data-gjs=navbar-items-mobile]`) as HTMLElement;

						var elStyle: any = navItems.style;
						if (navItems && !open) {
							elStyle.display = 'flex';
							currentEl.innerHTML = `
							<svg class="svg-icon" viewBox="0 0 20 20">
								<path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
							</svg>
							`
							open = true;
						} else if (navItems) {
							elStyle.display = 'none';
							currentEl.innerHTML = `
							<svg class="svg-icon" viewBox="0 0 20 20">
								<path d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
									c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
									s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
									c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
							</svg>
							`
							open = false;
						}
					};

					if (!(stringCollapse in currentEl)) {
						currentEl.addEventListener(clickEvent, toggle);
					}

				},
			},
		},
	});


}
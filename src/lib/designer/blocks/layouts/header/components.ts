import type { Editor } from 'grapesjs';

export default (editor: Editor) => {
	const { Components } = editor;

	const navbarPfx = 'navbar';
	const idContainer = `navbar-container`;
	const idNavMenu = `navbar-menu`;
	const idNavMenuLink = `navbar-menu-link`;
	const idBurgerMenu = `navbar-burger-menu`;
	const idBurgerMenuLine = `navbar-burger-menu-line`;

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
				name: 'Navbar',
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
						console.log("It is at least executed")
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
				droppable: false,
				draggable: false,
				removable: false,
				copyable: false,
				highlightable: false,
				components: [
					{
						attributes: { class: `${navbarPfx}-brand-wrapper` },
						components: [
							{
								type: 'link',
								content: 'yourwebsite.com',
								attributes: { class: `${navbarPfx}-brand`, href: '/' },
							}
						]
					},
					{
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
						console.log("It is at least executed")
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
				draggable: false,
				droppable: false,
				copyable: false,
				removable: false,
				attributes: { class: `${navbarPfx}-burger` },
				components: [
					{ type: idBurgerMenuLine },
					{ type: idBurgerMenuLine },
					{ type: idBurgerMenuLine },
				],
				script: function () {
					// @ts-ignore
					const currentEl = this as HTMLElement;
					const stringCollapse = 'gjs-collapse';
					const clickEvent = 'click';

					let open: boolean = false;

					const toggle = function (ev: Event) {
						ev.preventDefault();
						const navParent = currentEl.closest(`[data-gjs=navbar]`);
						const navItems = navParent?.querySelector(`[data-gjs=navbar-items-mobile]`) as HTMLElement;

						var elStyle: any = navItems.style;
						if (navItems && !open) {
							elStyle.display = 'flex';
							currentEl.style.transform = "rotateZ(-45deg) scale(.8)"
							open = true;
						} else if (navItems) {
							elStyle.display = 'none';
							currentEl.style.transform = "rotateZ(0) scale(1)"
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


	Components.addType(idBurgerMenuLine, {
		model: {
			defaults: {
				name: 'Burger Line',
				droppable: false,
				draggable: false,
				highlightable: false,
				attributes: { class: `${navbarPfx}-burger-line` },
			},
		},
	});

}
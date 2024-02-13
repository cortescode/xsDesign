import type { Editor, Plugin } from 'grapesjs'
import loadBlocks from './blocks/index'
import commands from './commands/index'
import panels from './panels'
import loadComponents from './components'
import loadCommands from './commands/index'
import loadPanels from './panels'
import loadStyles from './styles'


export type PluginOptions = {

	/**
	 * @default [ 'title', 'text , 'link', 'button, 'quote', column1', 'column2', 'column3', 'column3-7']
	 */
	blocks?: string[];

	/**
   * Add custom block options, based on block id.
   * @default (blockId) => ({})
   * @example (blockId) => blockId === 'quote' ? { attributes: {...} } : {};
   */
	block?: (blockId: string) => ({});

}

const plugin: Plugin<PluginOptions> = (editor, opts = {}) => {
	const config: Required<PluginOptions> = {
		blocks: [
			'text',
			'column1',
			'column2',
			'column3',
			'column3-7',
			'labelButton',
			'image',
			'video',
			'map'
		],
		block: () => ({}),
		...opts
	};

	if (typeof window !== 'undefined') {
		const primaryColor = '#ffffff'; //'#f4f7ff';
		const secondaryColor = '#000120';
		const tertiaryColor = '#dfe6ff';
		const quaternaryColor = '#2f85f0';
		const prefix = 'gjs-';
		let cssString = '';

		[
			['one', primaryColor],
			['two', secondaryColor],
			['three', tertiaryColor],
			['four', quaternaryColor],
		].forEach(([cnum, ccol]) => {
			cssString += `
            .${prefix}${cnum}-bg {
              background-color: ${ccol};
            }
    
            .${prefix}${cnum}-color {
              color: ${ccol};
            }
    
            .${prefix}${cnum}-color-h:hover {
              color: ${ccol};
            }
          `;
		});

		const style = document.createElement('style');
		style.innerText = cssString;
		document.head.appendChild(style);
	}

	loadBlocks(editor, config);

	loadCommands(editor, config)

	loadStyles(editor, config)

	loadComponents(editor)

	loadPanels(editor)


};

export default plugin
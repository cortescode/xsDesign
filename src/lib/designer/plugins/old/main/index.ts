import type { Editor, Plugin } from 'grapesjs';
import blocks from './blocks';
import commands from './commands/index';
import panels from './panels';

export type PluginOptions = {
  /**
   * Which blocks to add.
   * @default ['link-block', 'quote', 'text-basic']
   */
  blocks?: string[];

  /**
   * Add custom block options, based on block id.
   * @default (blockId) => ({})
   * @example (blockId) => blockId === 'quote' ? { attributes: {...} } : {};
   */
  block?: (blockId: string) => ({});

  /**
   * Modal import title.
   * @default 'Import'
   */
  modalImportTitle?: string;

  /**
   * Modal import button text.
   * @default 'Import'
   */
  modalImportButton?: string;

  /**
   * Import description inside import modal.
   * @default ''
   */
  modalImportLabel?: string;

  /**
   * Default content to setup on import model open.
   * Could also be a function with a dynamic content return (must be a string).
   * @default ''
   * @example editor => editor.getHtml()
   */
  modalImportContent?: string | ((editor: Editor) => string);

  /**
   * Code viewer (eg. CodeMirror) options.
   * @default {}
   */
  importViewerOptions?: Record<string, any>;

  /**
   * Confirm text before clearing the canvas.
   * @default 'Are you sure you want to clear the canvas?'
   */
  textCleanCanvas?: string;

  /**
   * Show the Style Manager on component change.
   * @default true
   */
  showStylesOnChange?: boolean;

  /**
   * Load custom preset theme.
   * @default true
   */
  useCustomTheme?: boolean;
};

export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: Plugin<PluginOptions> = (editor, opts: Partial<PluginOptions> = {}) => {
  const config: RequiredPluginOptions = {
    blocks: [
      'quote', 'text-basic', 'image-block', 
      'button-block', 'video-block', 'divider-block', 
      'hero-block', 'header-block', 'columns-block'
    ],
    block: () => ({}),
    modalImportTitle: 'Import',
    modalImportButton: 'Import',
    modalImportLabel: '',
    modalImportContent: '',
    importViewerOptions: {},
    textCleanCanvas: 'Are you sure you want to clear the canvas?',
    showStylesOnChange: true,
    useCustomTheme: true,
    ...opts,
  };

  if (config.useCustomTheme && typeof window !== 'undefined') {
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

  // Load blocks
  blocks(editor, config);

  // Load commands
  commands(editor, config);

  // Load panels
  panels(editor, config);

  
}

export default plugin;
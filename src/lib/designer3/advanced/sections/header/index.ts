import type { BlockProperties, Editor, Plugin } from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';

export type PluginOptions = {
  /**
   * The ID used to create the block and component
   * @default 'navbar'
   */
   id?: string;

   /**
   * The label used for the block and the component.
   * @default 'Navbar'
   */
  label?: string,

  /**
   * Object to extend the default block. Pass a falsy value to avoid adding the block.
   * @example
   * { category: 'Extra', ... }
   */
  block?: Partial<BlockProperties>;

  /**
   * Custom CSS styles for the component. This will replace the default one.
   * @default ''
   */
  style?: string,

  /**
   * Additional CSS styles for the component. These will be appended to the default one.
   * @default ''
   */
  styleAdditional?: string,

  /**
   * Component class prefix.
   * @default 'navbar'
   */
  classPrefix?: string,
};

export default function loadHeader(editor: Editor, opts = {}) {
  const options: Required<PluginOptions> = {
    id: 'navbar',
    label: 'Navbar',
    block: {},
    style: '',
    styleAdditional: '',
    classPrefix: 'navbar',
    ...opts,
  };

  loadBlocks(editor, options);
  loadComponents(editor, options);
};

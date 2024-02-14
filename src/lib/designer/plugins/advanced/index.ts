import type { BlockProperties, Plugin } from 'grapesjs';
import loadHeader from './header';
import loadMap from './map';
import loadCustomCode from './custom-code';

export type PluginOptions = {
  
  /**
   * Object to extend the default block. Pass a falsy value to avoid adding the block.
   * @example
   * { category: 'Extra', ... }
   */
  block?: Partial<BlockProperties>;
};

export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: Plugin<PluginOptions> = (editor, opts: PluginOptions = {}) => {

  loadHeader(editor)
  loadMap(editor)
  loadCustomCode(editor)
};

export default plugin;
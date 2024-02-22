import type { Editor, Plugin } from 'grapesjs';
import loadGradientSupport from './gradient';
import loadGridSupport from './grid';

export { parseGradient, toGradient, getValidDir, GRAD_DIRS, GRAD_TYPES } from './gradient';

export type PluginOptions = {
  /**
   * Grapick options.
   * https://github.com/artf/grapick#configurations
   * @default {}
   */
  grapickOpts?: Record<string, any>,

  /**
   * Custom color picker, check Grapick's repo to get more about it.
   * If you leave it empty the native color picker will be used.
   * You can use 'default' string to get the one used
   * by Grapesjs (which is spectrum at the moment of writing).
   */
  colorPicker?: 'default' | ((handler: any) => void),

  /**
   * Select, by default, the edge color stops of the gradient picker.
   * @default true
   */
  selectEdgeStops?: boolean,

  /**
   * The id to assign for the gradient picker type.
   * @default 'gradient'
   */
  styleType?: string,

  /**
   * Built-in property name to use for the composite type with the gradient
   * picker and direction/type selectors.
   * @default 'background-image'
   */
  builtInType?: string | false,
};

export default function loadStyles (editor: Editor, opts = {}){
    const options: PluginOptions = {
        grapickOpts: {
            min: 1,
            max: 99,
          },
        selectEdgeStops: true,
        styleType: 'gradient',
        builtInType: 'background-image',
        ...opts,
    };

    loadGradientSupport(editor, options);

    //loadGrid(editor)

    loadGridSupport(editor)

    
};

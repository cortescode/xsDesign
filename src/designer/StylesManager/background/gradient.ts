import type { Editor } from 'grapesjs';
// @ts-ignore
import Grapick from 'grapick';

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
interface GradientStop {
    color: string;
    position: string;
};

export interface GradientParseResult {
    direction: string;
    type: string;
    content: string;
    colors: string;
    stops: GradientStop[],
}

const getColor = (color: any) => {
    let cl = color.getAlpha() == 1 ? color.toHexString() : color.toRgbString();
    return cl.replace(/ /g, '');
}

const typeName = (name: string) => `${name}-gradient(`;

/**
 * Parse CSS gradient value.
 */
export const parseGradient = (value: string): GradientParseResult => {
    const start = value.indexOf('(') + 1;
    const end = value.lastIndexOf(')');
    const content = value.substring(start, end);
    const values = content.split(/,(?![^(]*\))/);
    const result: GradientParseResult = {
        direction: 'left',
        type: 'linear',
        content,
        colors: content,
        stops: [],
    };

    if (!content) {
        return result;
    }

    if (values.length > 2) {
        result.direction = values.shift()!;
        result.colors = values.join(',').trim();
    }

    let typeFound = false;
    const types = ['linear', 'radial'];
    types.forEach(name => {
        if (value.indexOf(typeName(name)) > -1 && !typeFound) {
            typeFound = true;
            result.type = name;
        }
    });

    result.stops = values.map(value => {
        const parts = value.split(' ');
        const position = (parts.length > 1 ? parts.pop()! : '').trim();
        const color = parts.join(' ').trim();
        return { color, position };
    });

    return result;
};

/**
 * Get CSS gradient value.
 */
export const toGradient = (type: string, angle: string, color: string): string => {
    const angles = [...GRAD_DIRS, 'center'];
    let angleValue = angle;

    if (
        ['linear', 'repeating-linear'].indexOf(type) >= 0
        && angles.indexOf(angleValue) >= 0
    ) {
        angleValue = angleValue === 'center' ? 'to right' : `to ${angleValue}`;
    }

    if (
        ['radial', 'repeating-radial'].indexOf(type) >= 0
        && angles.indexOf(angleValue) >= 0
    ) {
        angleValue = `circle at ${angleValue}`;
    }

    return color ? `${type}-gradient(${angleValue}, ${color})` : '';
};

export const getValidDir = (value: string) => {
    return GRAD_DIRS.filter(dir => value.indexOf(dir) > -1)[0];
}

export const GRAD_DIRS = ['right', 'bottom', 'left', 'top'];
export const GRAD_TYPES = ['linear', 'radial', 'repeating-linear', 'repeating-radial'];
const defaultCpAttr = '[data-toggle="handler-color-wrap"]';
const PROP_GRADIENT = 'background-image-gradient';
const PROP_DIR = `${PROP_GRADIENT}-dir`;
const PROP_TYPE = `${PROP_GRADIENT}-type`;

export default function loadGradientSupport(editor: Editor) {
    const em = editor.getModel();
    const { Styles } = editor;

    const config: PluginOptions = {
		grapickOpts: {
			min: 1,
			max: 99,
		},
		selectEdgeStops: true,
		styleType: 'gradient',
		builtInType: 'background-image',
	};

    let { colorPicker, builtInType } = config;
    const styleTypeId = config.styleType;


    const clearHandler = (handler: any) => {
        const el = handler.getEl().querySelector(defaultCpAttr);
        const $el = editor.$(el);
        $el.spectrum && $el.spectrum('destroy');
    };

    styleTypeId && Styles.addType<{ gp?: any }>(styleTypeId, {
        create({ change }) {
            const el = document.createElement('div');
            el.className = 'gp-container';
            el.style.width = '100%';
            const gp = new Grapick({ el, ...config.grapickOpts });
            gp.on('change', (complete: boolean) => change({ value: gp.getValue(), partial: !complete }));
            this.gp = gp;

            // Add the custom color picker, if requested
            if (colorPicker === 'default') {
                colorPicker = handler => {
                    const handlerEl = handler.getEl();
                    const el = handlerEl.querySelector(defaultCpAttr);
                    const handlerInput = handlerEl.querySelector('input');
                    handlerInput?.parentNode.removeChild(handlerInput)
                    const elStyle = el.style;
                    elStyle.backgroundColor = handler.getColor();
                    const updateColor = (color: any, complete = 1) => {
                        const cl = getColor(color);
                        elStyle.backgroundColor = cl;
                        handler.setColor(cl, complete);
                    };
                    em.initBaseColorPicker(el, {
                        color: handler.getColor(),
                        change(color: any) {
                            updateColor(color);
                        },
                        move(color: any) {
                            updateColor(color, 0);
                        },
                    });
                };

                gp.on('handler:remove', clearHandler);
            }

            colorPicker && gp.setColorPicker(colorPicker);

            return el;
        },
        emit({ updateStyle }, { partial, value }) {
            updateStyle(value, { partial });
        },
        update({ value }) {
            const { gp } = this;
            if (gp.getValue() === value) return;
            const handlers = gp.getHandlers();
            handlers.map(clearHandler);
            gp.setValue(value, { silent: true });

            if (config.selectEdgeStops) {
                [handlers[0], handlers[handlers.length - 1]].filter(Boolean)
                    .map(h => h.select({ keepSelect: true }));
            }
        },
        destroy() {
            this.gp?.destroy();
        },

        
    });
    

    builtInType && Styles.addBuiltIn(builtInType, {
        type: 'composite',
        // @ts-ignore
        fromStyle(style: any, { name }: any) {
            const parsed = parseGradient(style[name] || '');
            const gradType = parsed.type || GRAD_TYPES[0];
            const gradDir = getValidDir(parsed.direction) || GRAD_DIRS[0];
            const result = {
                [PROP_GRADIENT]: toGradient(gradType, gradDir, parsed.colors),
                [PROP_TYPE]: gradType,
                [PROP_DIR]: gradDir,
            };
            return result;
        },
        toStyle(values: any, { name }: any) {
            const gradValue = values[PROP_GRADIENT] || '';
            const gradType = values[PROP_TYPE] || GRAD_TYPES[0];
            const gradDir = values[PROP_DIR] || GRAD_DIRS[0];
            const parsed = parseGradient(gradValue);
            const result = toGradient(gradType, gradDir, parsed.colors);
            return { [name]: result };
        },
        properties: [
            {
                name: ' ',
                full: true,
                defaults: 'none',
                type: styleTypeId,
                property: PROP_GRADIENT,
            },
            {
                name: 'Direction',
                type: 'select',
                defaults: 'right',
                property: PROP_DIR,
                options: GRAD_DIRS.map(value => ({ value })),
            },
            {
                name: 'Type',
                type: 'select',
                defaults: 'linear',
                property: PROP_TYPE,
                options: GRAD_TYPES.map(value => ({ value })),
            }
        ]
    });

}
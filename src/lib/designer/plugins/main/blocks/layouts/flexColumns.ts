import type { Editor, BlockProperties } from 'grapesjs'


export default function loadFlexColumns(editor: Editor) {
    
    const blockManager = editor.BlockManager;

    const stylePrefix = "basic"

    const classRow = `${stylePrefix}-row`;
	const classCell = `${stylePrefix}-cell`;
    

	const minDim = 1;
    const resizerBtm: Record<string, any> = {
		tl: 0,
		tc: 0,
		tr: 0,
		cl: 0,
		cr: 0,
		bl: 0,
		br: 0,
		minDim
	};

    const rowMinHeight = 80;

    const rowAttributes = {
		class: classRow,
		'data-gjs-droppable': `.${classCell}`,
		'data-gjs-resizable': resizerBtm,
		'data-gjs-name': 'Row'
	};

    const styleRow = `
    .${classRow} {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: nowrap;
        padding: 10px;
    }
    @media (max-width: 768px) {
        .${classRow} {
            flex-wrap: wrap;
        }
    }`

    const styleColumn = `
	.${classCell} {
		min-height: ${rowMinHeight}px;
		flex-grow: 1;
		flex-basis: 100%;
	}`


    const styleColumn30 = `
	.${stylePrefix}cell30 {
		width: 30%;
	}`;
	const styleColumn70 = `
	.${stylePrefix}cell70 {
		width: 70%;
	}`;


	const step = 0.2;
	const currentUnit = 1;
    
    const resizerRight: Record<string, any> = {
		...resizerBtm,
		cr: 1,
		bc: 0,
		currentUnit,
		minDim,
		step
	};

    const columnAttributes: Record<string, any> = {
		class: classCell,
		'data-gjs-draggable': `.${classRow}`,
		'data-gjs-resizable': resizerRight,
		'data-gjs-name': 'Cell',
        'data-gjs-unstylable': 'width',
        'data-gjs-stylable-require': 'flex-basis'
	};

    const attrsToString = (attrs: Record<string, any>) => {
		const result = [];

		for (let key in attrs) {
			let value = attrs[key];
			const toParse = value instanceof Array || value instanceof Object;
			value = toParse ? JSON.stringify(value) : value;
			result.push(`${key}=${toParse ? `'${value}'` : `'${value}'`}`);
		}

		return result.length ? ` ${result.join(' ')}` : '';
	};

    
	const attrsRow = attrsToString(rowAttributes);
	const attrsCell = attrsToString(columnAttributes);

    const commonBlockProps: Partial<BlockProperties> = {
		category: "Basic",
		select: true,
	};

    
    blockManager.add('column1', {
        ...commonBlockProps,
        label: 'column1',
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
        </svg>`,
        content: `<section ${attrsRow}>
        <div ${attrsCell}></div>
        </section>
        <style>
            ${styleRow}
            ${styleColumn}
        </style>
        `,
        category: 'Flexbox'
    });

    
    blockManager.add('column2', {
        ...commonBlockProps,
        label: 'column2',
        media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
        </svg>`,
        content: `<section ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        </section>
        <style>
            ${styleRow}
            ${styleColumn}
        </style>
        `,
        category: 'Flexbox'
    });
    

    blockManager.add('column3', {
        ...commonBlockProps,
        label: 'column3',
        media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
        </svg>`,
        content: `<section ${attrsRow}>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        <div ${attrsCell}></div>
        </section>
        <style>
            ${styleRow}
            ${styleColumn}
        </style>
        }`,
        category: 'Flexbox'
    });

    blockManager.add('column3-7', {
        ...commonBlockProps,
        label: 'column3-7',
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"/>
        </svg>`,
        content: `
        <section ${attrsRow}>
            <div ${attrsCell} style='flex-basis'></div>
            <div ${attrsCell} style='flex-basis'></div>
        </section>
        <style>
                ${styleRow}
                ${styleColumn}
                ${styleColumn30}
                ${styleColumn70}
        </style>
        
        }`,
        category: 'Flexbox'
        
    });

}
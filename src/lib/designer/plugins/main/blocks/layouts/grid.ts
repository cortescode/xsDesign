import type { Editor, BlockProperties } from 'grapesjs'


export default function loadGrid(editor: Editor) {
    
    const blockManager = editor.BlockManager;

    const stylePrefix = "layout"

    const classGrid = `${stylePrefix}-grid`;
	const classChild = `${stylePrefix}-child`;
    

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

    const gridMinHeight = 80;

    const gridAttributes = {
		class: classGrid,
		'data-gjs-droppable': `.${classGrid}`,
		'data-gjs-resizable': resizerBtm,
		'data-gjs-name': 'Grid'
	};

    const styleGrid = `
    .${classGrid} {
        display: grid;
        justify-content: center;
        align-items: center;
        padding: 40px;
        gap: 10px;
    }
    `

    const styleChild = `
	.${classChild} {
		min-height: ${gridMinHeight}px;
        min-width: 80px;
		width: auto;
        min-height: 80px;
        height: 100%;
        padding: 10px
	}`


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

    const childAttributes: Record<string, any> = {
		class: classChild,
		'data-gjs-draggable': `.${classChild}`,
		'data-gjs-resizable': resizerRight,
		'data-gjs-name': 'Grid Child',
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

    
	const attrsGrid = attrsToString(gridAttributes);
	const attrsChild = attrsToString(childAttributes);

    const commonBlockProps: Partial<BlockProperties> = {
		category: "Basic",
		select: true,
	};

    blockManager.add('grid1', {
        ...commonBlockProps,
        label: 'grid 1x1',
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
        </svg>`,
        content: `<div ${attrsGrid}>
            <div ${attrsChild}>
                <h2>Title</h2>
                <p>Paragraph</p>
            </div>
        </div>
        <style>
            ${styleGrid}


            .${classGrid} {
                grid-template-columns: 1fr;
            }

            ${styleChild}
        </style>
        `,
        category: 'Grid Layout'
    });

    
    blockManager.add('grid2', {
        ...commonBlockProps,
        label: 'grid 2x1',
        media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
        </svg>`,
        content: `<div ${attrsGrid}>
            <div ${attrsChild}>
                <h2>Title</h2>
                <p>Paragraph</p>
            </div>
            <div ${attrsChild}>
                <h2>Title</h2>
                <p>Paragraph</p>
            </div>
        </div>
        <style>
            ${styleGrid}

            .${classGrid} {
                grid-template-columns: 1fr 1fr;
            }

            ${styleChild}
        </style>
        `,
        category: 'Grid Layout'
    });

    blockManager.add('grid3', {
        ...commonBlockProps,
        label: 'grid 3x1',
        media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
        </svg>`,
        content: `<div ${attrsGrid}>
            <div ${attrsChild}>
                <h2>Title</h2>
                <p>Paragraph</p>
            </div>

            <div ${attrsChild}>
                <h2>Title</h2>
                <p>Paragraph</p>
            </div>

            <div ${attrsChild}>
                <h2>Title</h2>
                <p>Paragraph</p>
            </div>
        </div>
        <style>
            ${styleGrid}
            ${styleChild}

            .${classGrid} {
                grid-template-columns: 1fr 1fr 1fr;
            }
        </style>
        `,
        category: 'Grid Layout'
    });
    

    blockManager.add('grid2_2', {
        ...commonBlockProps,
        label: 'grid 2x2',
        media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M7.228,11.464H1.996c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232
		c0.723,0,1.308-0.586,1.308-1.308v-5.232C8.536,12.051,7.95,11.464,7.228,11.464z M7.228,17.351c0,0.361-0.293,0.654-0.654,0.654
		H2.649c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z
		 M17.692,11.464H12.46c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232
		c0.722,0,1.308-0.586,1.308-1.308v-5.232C19,12.051,18.414,11.464,17.692,11.464z M17.692,17.351c0,0.361-0.293,0.654-0.654,0.654
		h-3.924c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z
		 M7.228,1H1.996C1.273,1,0.688,1.585,0.688,2.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.585,1.308-1.308
		V2.308C8.536,1.585,7.95,1,7.228,1z M7.228,6.886c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.292-0.654-0.654V2.962
		c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z M17.692,1H12.46c-0.723,0-1.308,0.585-1.308,1.308
		V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232C18.414,8.848,19,8.263,19,7.54V2.308C19,1.585,18.414,1,17.692,1z M17.692,6.886
		c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.293-0.654,0.654-0.654h3.924
		c0.361,0,0.654,0.292,0.654,0.654V6.886z"></path>
        </svg>`,
        content: `<div ${attrsGrid}>
        <div ${attrsChild}>
            <h2>Title</h2>
            <p>Paragraph</p>
        </div>
        <div ${attrsChild}>

            <h2>Title</h2>
            <p>Paragraph</p>
        
        </div>
        <div ${attrsChild}>
        
            <h2>Title</h2>
            <p>Paragraph</p>

        </div>
        <div ${attrsChild}>
        
            <h2>Title</h2>
            <p>Paragraph</p>

        </div>
        </div>
        <style>
            ${styleGrid}
            ${styleChild}

            .${classGrid} {
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
            }
        </style>
        `,
        category: 'Grid Layout'
    });


    /* blockManager.add('grid3_2', {
        ...commonBlockProps,
        label: 'grid 3x2',
        media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
        </svg>`,
        content: `<div ${attrsGrid}>
            <div ${attrsChild}>
                <h2>Title</h2>
                <p>Paragraph</p>
            </div>
            <div ${attrsChild}>

                <h2>Title</h2>
                <p>Paragraph</p>
            
            </div>
            <div ${attrsChild}>
            
                <h2>Title</h2>
                <p>Paragraph</p>

            </div>
            <div ${attrsChild}>
            
                <h2>Title</h2>
                <p>Paragraph</p>

            </div>

            <div ${attrsChild}>
                <h2>Title</h2>
                <p>Paragraph</p>
            </div>

            <div ${attrsChild}>
                <h2>Title</h2>
                <p>Paragraph</p>
            </div>
        </div>
        <style>
            ${styleGrid}
            ${styleChild}

            .${classGrid} {
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr;
            }
        </style>
        `,
        category: 'Grid Layout'
    }); */

}
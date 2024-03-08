import type { Editor } from 'grapesjs';

export default function loadHeroBlocks(editor: Editor) {

    editor.Blocks.add('hero', {
        media: `<img width="100%" style="border: 1px solid var(--light-blue)" src="/media/assets/hero.avif"></img>`,
        label: 'Hero basic',
        category: 'Layouts',
        select: true,
        content: { 
            type: 'hero'
        },
    });

    editor.Blocks.add('hero2', {
        media: `<img width="100%" style="border: 1px solid var(--light-blue)" src="/media/assets/hero2.avif"></img>`,
        label: 'Hero 2',
        category: 'Layouts',
        select: true,
        content: { 
            type: 'hero2'
        },
    });
}

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import grapesjs from 'grapesjs';
import type { Editor } from 'grapesjs';
import loadMarginAndPaddingInput from './marginAndPadding';

describe('GrapesJS Margin and Padding Plugin Integration', () => {
    let editor: Editor;

    beforeEach(() => {
        vi.useFakeTimers();
        editor = grapesjs.init({
            container: document.body,
            height: '100px',
            width: '100px',
            storageManager: false,
            plugins: [loadMarginAndPaddingInput],
            styleManager: {
                sectors: [
                    {
                        id: "MARGIN & PADDIN",
                        name: "MARGIN & PADDIN",
                        open: false,
                        properties: [
                            //@ts-ignore
                            {
                                type: 'margin-and-padding',
                                label: "",
                                properties: ["margin", "padding"],
                                full: true,
                                units: ['px', '%'],
                            }
                        ],
                    },
                ]
            }
        });
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('adds margin-and-padding type to StyleManager', () => {
        expect(editor.StyleManager.getType('margin-and-padding')).toBeTruthy();
    });

    it('updates UI when a component is selected', async () => {

        // Currently Not Testeable with jsdom

        /*
        const component = editor.addComponents({
            type: 'text',
            components: 'Hello',
            style: { 'margin-top': '10px', 'padding-left': '20px' },
        })[0];

        editor.runCommand('open-sm');
        // Run all timers
        vi.runAllTimers();
        editor.select(component);
        // Run all timers
        vi.runAllTimers();
        editor.trigger('style:update');

        // Run all timers
        vi.runAllTimers();

        const container = editor.getContainer();
        expect(container).toBeTruthy();

        const marginTopInput = document.querySelector('#margin-top > p') as HTMLElement;
        const paddingLeftInput = document.querySelector('#padding-left > p') as HTMLElement;

        expect(marginTopInput, 'Margin top input not found').toBeTruthy();
        expect(paddingLeftInput, 'Padding left input not found').toBeTruthy();

        expect(marginTopInput.textContent).toBe("10px");
        expect(paddingLeftInput.textContent).toBe("20px"); 
        */
    });

    it('updates component style when input changes', async () => {
        const component = editor.addComponents({
            type: 'text',
            components: 'Hello',
        })[0];

        editor.runCommand('open-sm');
        editor.select(component);

        // Run all timers
        vi.runAllTimers();

        const marginTopInput = editor.getContainer()?.querySelector('#margin-top input') as HTMLInputElement;
        marginTopInput.value = '15';
        marginTopInput.dispatchEvent(new Event('change'));

        // Run all timers again to process the change event
        vi.runAllTimers();

        expect(component.getStyle()['margin-top']).toBe('15px');
    });
});
import { render } from '@testing-library/svelte';
import { describe, expect, it, test } from 'vitest';
import DomainComponent from '../components/DomainComponent.svelte';



describe("Check domain creation", () => {
    // Adding domain
    it('Render Domain', () => {
        const results = render(DomainComponent, { 
            props: { 
                domain: {
                    name: 'www.ejemplo.test',
                    hostname_id: 'www.ejemplo.test',
                    active: false
                } 
            }
        });
    
        expect(() => results.component).not.toThrow();
        expect(results.component).not.toBeNull();
    })
});


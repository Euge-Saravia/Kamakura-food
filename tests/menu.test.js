import { describe, it, expect } from 'vitest';
import { JSDOM } from 'jsdom';
import { displayMenu } from '../src/menu';

describe('display menu', () => {
    it('should display all the products', async () => {
        const dom = await JSDOM.fromFile('index.html', {
            url: 'http://localhost/'
        });

        global.document = dom.window.document;
        global.window = dom.window;

        const products = [
            { id: '1', name: 'Product 1', description: 'Description 1', price: '10' },
            { id: '2', name: 'Product 2', description: 'Description 2', price: '20' }
        ];

        displayMenu(products);

        const productsContainer = dom.window.document.querySelector('#products');
        const productContainers = productsContainer.querySelectorAll('.product-container');

        expect(productContainers.length).toBe(2);
        expect(productContainers[0].querySelector('h3').textContent).toBe('Product 1');
        expect(productContainers[1].querySelector('h3').textContent).toBe('Product 2');
        expect(productContainers[0].querySelector('.price-container h5').textContent).toBe('10 €');
        expect(productContainers[1].querySelector('.price-container h5').textContent).toBe('20 €');
    });
});

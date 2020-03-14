const pages = ['http://example.com/'];
const sizes = ['iphone-6', 'ipad-2', [1200, 800]];

describe('Visual Regression', () => {
	// it('My first visual regrresion test', () => {
	// 	cy.visit('http://example.com/');
	// 	cy.matchImageSnapshot();
	// });

	sizes.forEach(size => {
		pages.forEach(page => {
			it(`should match ${page} in resolution ${size}`, () => {
				let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate();
				cy.clock(currentTime);
				cy.setResolution(size);
				cy.visit(page);
				cy.matchImageSnapshot();
			});
		});
	});
});

describe('Single Element Snapshot', () => {
	it('should match a single element on the page', () => {
		cy.visit('http://example.com/');
		cy.get('h1').matchImageSnapshot();
	});
});

describe('My first simple test with cypress', () => {
	it('True should be true', () => {
		expect(true).to.equal(true);
	});

	it('5 should be 5', () => {
		expect(5).to.equal(5);
	});
});

describe('Another describe block', () => {
	it('failed should false be false', () => {
		expect(false).to.equal(false);
	});
});

describe('Browser Actions', () => {
	it('should load correct url', () => {
		cy.visit('http://example.com/', { timeout: 10000 });
	});

	it('should check correct url', () => {
		cy.url().should('include', 'example.com');
	});

	// it('should wait for 3 seconds', () => {
	// 	cy.wait(3000);
	// });

	// it('should pause the execution', () => {
	// 	cy.pause();
	// });

	it('should check for correct element on the page', () => {
		cy.get('h1').should('be.visible');
	});
});

describe('Browser Actions', () => {
	it('should load books website', () => {
		cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 });
		cy.url().should('include', 'index.html');
		cy.log('Before Reload');
		cy.reload();
		cy.log('After reload');
	});

	it('should click on Travel category', () => {
		cy.get('a')
			.contains('Travel')
			.click();
		cy.get('h1').contains('Travel');
	});

	it('shold display correct number of books', () => {
		cy.get('.product_pod')
			.its('length')
			.should('eq', 11);
	});

	it('should click on Poetry category', () => {
		cy.get('a')
			.contains('Poetry')
			.click();
		cy.get('H1').contains('Poetry');
	});

	it('should display correct price of Olio', () => {
		cy.visit('http://books.toscrape.com/catalogue/olio_984/index.html');
		cy.get('h1').contains('Olio');
		cy.get('.price_color').contains('£23.88');
	});
});

describe('Scroll on the Page', () => {
	it('should scroll down and up on the page', () => {
		cy.visit('http://devexpress.github.io/testcafe/example/');
		cy.wait(1000);
		cy.get('#submit-button').scrollIntoView();
		cy.wait(1000);
		cy.get('header').scrollIntoView();
	});
});

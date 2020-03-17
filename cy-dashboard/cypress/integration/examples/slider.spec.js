describe('Slidar', () => {
	it('should pick a value from slidar', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/');
		cy.get('#tried-test-cafe').click();
		cy.contains('5').click();
	});
});

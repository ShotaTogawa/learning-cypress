describe('Keyboard press simulation', () => {
	it('should submit searchbox with pressing enter', () => {
		cy.visit('http://zero.webappsecurity.com/index.html');
		// {enter}でenterを押下
		cy.get('#searchTerm').type('just some text {enter}');
	});
});

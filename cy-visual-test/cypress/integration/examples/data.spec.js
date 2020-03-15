describe('Visual Regression - Data Tables', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html');
		cy.get('#signin_button').click();
		cy.get('#user_login').type('username');
		cy.get('#user_password').type('password');
		cy.get('#user_remember_me').click();
		cy.get('input[name="submit"]').click();
	});

	it('should load ammount tables', () => {
		cy.get('#account_activity_tab').click();
	});

	it('Data Table Snaphoto', () => {
		cy.setResolution([1280, 720]);
		cy.matchImageSnapshot();
	});
});

describe('working with inputs', () => {
	it('should override the current time', () => {
		const date = new Date(2020, 3, 10).getTime(); // return a timestamp
		cy.clock(date);
		cy.log(date);
	});

	it('should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');
		cy.clearCookies({ log: true });
		cy.clearLocalStorage('your item', { log: true });
	});
	it('should fill username', () => {
		cy.get('#user_login').as('username');
		cy.get('@username').clear();
		// formへのタイピング
		cy.get('@username').type('Some invalid Name', { delay: 50 });
	});

	it('should fill password', () => {
		// alias
		cy.get('#user_password').as('password');
		cy.get('@password').clear();
		cy.get('@password').type('Some invalid password', { delay: 50 });
	});

	it('should mark checkbox', () => {
		// checkboxの取得
		cy.get('input[type="checkbox"]').click();
	});

	it('should submit login form', () => {
		cy.contains('Sign in').click();
	});

	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			// Chaining assertion
			.and('contain', 'Login and/or password are wrong.');
	});
});

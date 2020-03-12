describe('Custom commands', () => {
	it('should login to application usigin custom cypress command', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');
		cy.login('username', 'password');
	});
});

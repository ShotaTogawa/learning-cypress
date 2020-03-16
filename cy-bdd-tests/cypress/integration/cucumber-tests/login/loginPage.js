const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME_INPUT = '#user_login';
const PASSWORD_INPUT = '#user_password';
const SUBMIT_BUTTON = 'input[name="submit"]';
class LoginPage {
	static visitLoginPage() {
		cy.visit(URL);
	}

	static fillUserName(name) {
		cy.get(USERNAME_INPUT).type(name);
	}
	static fillPasswroed(password) {
		cy.get(PASSWORD_INPUT).type(password);
	}

	static submit() {
		cy.get(SUBMIT_BUTTON).click();
	}
}

export default LoginPage;

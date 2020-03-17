import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from './loginPage';

Given('I open login page', () => {
	// cy.visit('http://zero.webappsecurity.com/login.html');
	LoginPage.visitLoginPage();
});

// When('I submit login', () => {
// fill username
// cy.get('#user_login').type('username');
// fill password
// cy.get('#user_password').type('password');
// submit form
// cy.get('input[name="submit"]').click();

// 	LoginPage.fillUserName('username');
// 	LoginPage.fillPasswroed('password');
// 	LoginPage.submit();
// });

// fixtureのsentenceと合わせる必要がある。
When('I fill username with {string}', username => {
	LoginPage.fillUserName(username);
});

When('I fill password with {string}', password => {
	LoginPage.fillPasswroed(password);
});

When('I click on submit login', () => {
	LoginPage.submit();
});

Then('I should see homepage', () => {
	// get some element after
	cy.get('#account_summary_tab').should('be.visible');
});

Then('I should see error message', () => {
	LoginPage.shouldShowErrorMessage();
});

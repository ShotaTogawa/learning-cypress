class BasePage {
	static loadHomePage() {
		cy.visit('http://devexpress.github.io/testcafe/example/');
	}

	static wait(number) {
		cy.wait(number);
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView();
	}

	static scrollToTop() {
		cy.get('header').scrollIntoView();
	}
}

describe('Abstraction with classes', () => {
	before(function() {
		// runs before all tests inside describe
		// setup test data or test context
		// seed or reset the database
		HomePage.loadHomePage();
	});
	after(function() {
		// runs after all tests inside describe blok are done
		// test clean up
		// clean cookies or localstorage
	});

	beforeEach(function() {
		// runs before each it block in the describe
	});

	afterEach(function() {
		// runs after each it block in the describe
	});

	// skipをつけるとそのブロックは実行されない
	it('1st IT', () => {
		HomePage.scrollToBottom();
		HomePage.wait(2000);
		HomePage.scrollToTop();
		HomePage.wait(2000);
	});

	// onlyをつけるとそのブロックだけ実行される。
	it.only('2nd IT', () => {
		HomePage.scrollToBottom();
		HomePage.wait(2000);
		HomePage.scrollToTop();
		HomePage.wait(2000);
	});
});

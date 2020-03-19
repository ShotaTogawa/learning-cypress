export default class AccountLinks {
	static clickSummary() {
		cy.get('#accout_summary_tab').click();
	}

	static clickActivity() {
		cy.get('#accout_acctivity_tab').click();
	}

	static clickTransferFunds() {
		cy.get('#transfer_funds_tab').click();
	}

	static clickSummary() {
		cy.get('#pay_bills_tab').click();
	}

	static clickMoneyApp() {
		cy.get('#money_map_tab').click();
	}

	static clickSummary() {
		cy.get('#online_statements_tab').click();
	}
}

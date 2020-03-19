import FeedbackPage from '../../page-objects/pages/FeedbackPage';

describe('Feedback test using fixtures', () => {
	before(function() {
		FeedbackPage.load();
	});

	it('should submit feedback', () => {
		FeedbackPage.submitFeedback();
	});
});

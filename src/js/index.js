const SELECTORS = {
	printButton: '[data-print]',
};

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector(SELECTORS.printButton)?.addEventListener('click', () => {
		window.print();
	});
});

function fadeIn(element, duration) {
	return new Promise((resolve) => {
		element.style.display = 'block'; // Ensure the element is visible
		let opacity = 0;
		const interval = 16; // Approximate time for each frame (60fps)
		const increment = interval / duration;

		function increase() {
			opacity += increment;
			if (opacity <= 1) {
				element.style.opacity = opacity;
				requestAnimationFrame(increase);
			} else {
				element.style.opacity = 1; // Ensure it's fully visible
				resolve(); // Resolve the promise
			}
		}
		increase();
	});
}

function fadeOut(element, duration) {
	return new Promise((resolve) => {
		let opacity = 1;
		const interval = 16; // Approximate time for each frame (60fps)
		const decrement = interval / duration;

		function decrease() {
			opacity -= decrement;
			if (opacity >= 0) {
				element.style.opacity = opacity;
				requestAnimationFrame(decrease);
			} else {
				element.style.opacity = 0; // Ensure it's fully hidden
				element.style.display = 'none'; // Hide the element after fade out
				resolve(); // Resolve the promise
			}
		}
		decrease();
	});
}
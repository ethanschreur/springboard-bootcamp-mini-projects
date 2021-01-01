const randomRGB = function() {
	let num1 = Math.floor(Math.random() * 256);
	let num2 = Math.floor(Math.random() * 256);
	let num3 = Math.floor(Math.random() * 256);
	return `rgb(${num1}, ${num2}, ${num3})`;
};

const letters = document.querySelectorAll('.letter');
for (let letter of letters) {
	setInterval(function() {
		letter.style.color = randomRGB();
	}, 1000);
}

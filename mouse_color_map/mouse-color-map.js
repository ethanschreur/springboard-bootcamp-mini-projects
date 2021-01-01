let body = document.querySelector('body');
body.style.width = '100vw';
body.style.height = '100vh';
body.style.postion = 'fixed';

document.addEventListener('mousemove', function(event) {
	let x = event.pageX;
	let y = event.pageY;
	let r = x / innerWidth * 255;
	let b = y / innerHeight * 255;
	let rgb = `rgb(${r}, 100, ${b})`;
	body.style.backgroundColor = rgb;
});

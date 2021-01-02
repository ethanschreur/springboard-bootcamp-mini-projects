const topAppsList = [
	'Youtube',
	'Instagram',
	'Snapchat',
	'TikTok',
	'Messenger',
	'Gmail',
	'Netflix',
	'Facebook',
	'Google Maps',
	'Amazon Shopping',
	'Spotify',
	'DoorDash'
];
const topAppsLogos = [
	'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png',
	'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/100px-Snapchat_logo.svg.png',
	'https://i.pinimg.com/originals/c0/5a/42/c05a42a877f3efa475f65aaae6ccb7a2.png',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gmail_Icon.svg/220px-Gmail_Icon.svg.png',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/185px-Netflix_2015_N_logo.svg.png',
	'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png',
	'https://josephreisigl.files.wordpress.com/2015/08/amazonlogo.png?w=584',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png',
	'https://cdn.doordash.com/static/img/doordash-square-red.jpg?dd-nonce=1'
];
function timesInList(list, value) {
	let times = 0;
	for (let i of list) {
		if (i === value) {
			times++;
		}
	}
	return times;
}
let usedNums = [];
let counter = 0;

for (let i = 0; i < 25; i++) {
	if (i !== 12) {
		let number;
		while (number === undefined) {
			let int = Math.floor(Math.random() * 12);
			if (timesInList(usedNums, int) < 2) {
				number = int;
			}
		}
		usedNums.push(number);
		let newDiv = document.createElement('div');
		newDiv.classList.add('card');
		newDiv.style.backgroundImage = `url(${topAppsLogos[number]})`;
		newDiv.style.backgroundSize = 'cover';
		newDiv.style.border = 'black 5px solid';
		newDiv.style.backgroundPosition = 'center';
		newDiv.style.backgroundRepeat = 'no-repeat';
		newDiv.style.backgroundSize = '0 0';
		document.querySelector('#grid').append(newDiv);
	} else {
		let blankDiv = document.createElement('div');
		blankDiv.classList.add('blank');
		blankDiv.innerText = `${counter}`;
		document.querySelector('#grid').append(blankDiv);
	}
}
let lastTarget;
let howManyClicked = 0;
document.querySelector('#grid').addEventListener('click', function(event) {
	if (
		event.target.classList.contains('card') &&
		lastTarget !== event.target &&
		event.target.style.backgroundSize !== 'cover' &&
		howManyClicked < 2
	) {
		howManyClicked++;
		if (howManyClicked === 2) {
			counter++;
		}
		event.target.style.backgroundSize = 'cover';
		if (howManyClicked === 2) {
			setTimeout(function() {
				if (event.target.style.backgroundImage !== lastTarget.style.backgroundImage) {
					event.target.style.backgroundSize = '0 0';
					lastTarget.style.backgroundSize = '0 0';
					howManyClicked = 0;
				} else {
					howManyClicked = 0;
				}
			}, 1000);
		} else {
			lastTarget = event.target;
		}
		document.querySelector('.blank').innerText = counter;
	} else {
		// event.target.style.backgroundSize = 'cover';
	}
});

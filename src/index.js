const axios = require('axios');

let profile = 'metalface';
let baseUrl = 'https://www.wechall.net/profile/';

axios.get(`${baseUrl}${profile}`)
.then(response => {
	if (typeof response !== 'object' || typeof response.data !== 'string' || !response.data.length) {
		console.log('Unknown response from wechall');
		return '';
	}

	let html = response.data;

	if (!html.includes('<th>Global Rank</th>')) {
		console.log("Can't find global rank <th>");
		return '';
	}

	html = html.split('<th>Global Rank</th>')[1];

	if (!html.includes("</a>")) {
		console.log('Post split 1 html has no close anchor');
		return '';
	}

	html = html.split('</a>')[0];

	if (!html.includes('<td><a href=')) {
		console.log('Post split 2 html has no anchor or td');
		return '';
	}

	html = html.replace('<td><a href=', '');

	if (!html.includes('>')) {
		console.log('Post replace has no greater than');
		return '';
	}

	let rank = html.split('>')[1];
	console.log(`Rank = ${rank}`);
})
.catch(error => {
	console.log(error);
});
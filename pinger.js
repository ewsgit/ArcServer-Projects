import fetch from 'node-fetch';

const urls = [
	"https://hytools.ewsgit.repl.co"
]

function ping() {
	for (let i = 0; i < urls.length; i++) {
		fetch(urls[i]).then(res => {
			console.log(`${urls[i]} is up`);
		}).catch(err => {
			console.log(`${urls[i]} is down`);
		})
	}
}

ping()

setInterval(ping, 1800000);
console.log("Pinger started");
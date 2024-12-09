var url = 'http://localhost:3000/about'
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
	
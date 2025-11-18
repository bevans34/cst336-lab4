// Lab 4: Brandon Evans

import express from 'express';
import fetch from 'node-fetch';
const planets = (await import('npm-solarsystem')).default; // Import solarsystem package
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes

app.get('/', async(req, res) => { // Home
    let apiKey = "7756a1e81f817c186cf57294e1c19b37b49c54b8f34e7c499ee0ce5cd86cd16e";
	let url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&query=solar-system`;
    let response = await fetch(url);
    let data = await response.json();
    let randomImage = data.urls.full;
    res.render("index", {randomImage}); // Changed from res.send
});

app.get('/nasa', async(req, res) => { // NASA Picture of the Day
    let apiKey = "9mUzIkhlZCZaOoMfspg7jMmwZCZ4LiRHtkgkambD";
	let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2025-11-15`;
    let response = await fetch(url);
    let podData = await response.json();
    res.render("nasa", {podData});
});

// Planet views
app.get('/mercury', (req, res) => { // Mercury
    let planetMercury = planets.getMercury();
    console.log(planetMercury);
    res.render("mercury", {planetMercury});
});

app.get('/venus', (req, res) => { // Venus
    let planetVenus = planets.getVenus();
    console.log(planetVenus);
    res.render("venus", {planetVenus});
});

app.get('/earth', (req, res) => { // Earth
    let planetEarth = planets.getEarth();
    console.log(planetEarth);
    res.render("earth", {planetEarth});
});

app.get('/mars', (req, res) => { // Mars
    let planetMars = planets.getMars();
    onsole.log(planetMars);
    res.render("mars", {planetMars});
});

app.get('/jupiter', (req, res) => { // Jupiter
    let planetJupiter = planets.getJupiter();
    console.log(planetJupiter);
    res.render("jupiter", {planetJupiter});
});

app.get('/saturn', (req, res) => { // Saturn
    let planetSaturn = planets.getSaturn();
    console.log(planetSaturn);
    res.render("saturn", {planetSaturn});
});

app.get('/uranus', (req, res) => { // Uranus
    let planetUranus = planets.getUranus();
    console.log(planetUranus);
    res.render("uranus", {planetUranus});
});

app.get('/neptune', (req, res) => { // Neptune
    let planetNeptune = planets.getNeptune();
    console.log(planetNeptune);
    res.render("neptune", {planetNeptune});
});

app.get('/pluto', (req, res) => { // Pluto
    let planetPluto = planets.getPluto();
    console.log(planetPluto);
    res.render("pluto", {planetPluto});
});

// Listener
app.listen(3000, () => {
    console.log('server started');
});
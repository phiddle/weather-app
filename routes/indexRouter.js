const express = require("express");
const router = express.Router();

const getWeather = require('../lib/weather');

router.get('/', async(req, res) => {
  let data = await getWeather("Liverpool", "uk" );
  let name = data.name;
  let description = data.weather[0].description;
  let temp = Math.round(data.main.temp);
  let feels_like = Math.round(data.main.feels_like);
  let humidity = Math.round(data.main.humidity);
  let speed = Math.round(data.wind.speed);
  res.render("index", { name, temp, feels_like, humidity, speed })
});


module.exports = router;
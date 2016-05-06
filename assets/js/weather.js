(function updateWeather() {
    var apiKey = config.openWeatherKey;
    var cityId = 5913490;
    var units = "metric";

    var url = "http://api.openweathermap.org/data/2.5/weather?" +
        "id=" + cityId.toString() +
        "&units=" + units +
        "&APPID=" + apiKey;

    httpGetAsync(url, setWeather);

    setTimeout(updateWeather, 1800000);
})();

function setWeather(res) {
    var iconName = getWeatherIcon(res.weather[0].id);
    var temperature = Math.ceil(res.main.temp).toString();

    document.getElementById('weather-icon').className = iconName;
    document.getElementById('weather-temp').innerHTML = temperature + "&deg;C";

    //TODO: Hook up the city/wind/high/lo temps
}

function getWeatherIcon(id) {
    var keyPrefix = "wi-owm-";
    var keyAffix = "";

    var timeOfDay = moment().format('A');
    if (timeOfDay == "AM") {
        keyAffix = "day";
    } else {
        keyAffix = "night";
    }

    var iconKey = keyPrefix + keyAffix + "-" + id;

    var iconValuePrefix = "wi wi-";
    var iconValueSuffix = iconMap[iconKey];

    return iconValuePrefix + iconValueSuffix;
}

function httpGetAsync(url, callback) {
    //callback(weatherData);

     var xmlHttp = new XMLHttpRequest();
     xmlHttp.onreadystatechange = function () {
     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
     callback(JSON.parse(xmlHttp.responseText));
     };
     xmlHttp.open("GET", url, true);
     xmlHttp.send();
}

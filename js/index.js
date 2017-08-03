$(document).ready(function() {
  var isFahrenheit = true;
  var getTemperature = 0;

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);

    $.getJSON(
      "https://crossorigin.me/https://api.darksky.net/forecast/4313cf45a2564fa670737c4af3d93528/" +
        position.coords.latitude +
        "," +
        position.coords.longitude,
      function(json) {
        getTemperature = Math.round(json.currently.temperature);
        console.log(
          "Current temperature: " +
            json.currently.temperature +
            " degrees fahrenheit"
        );
        getTemperature = Math.round((getTemperature - 32) * (5 / 9));
        getTemperature = Math.round(getTemperature * (9 / 5) + 32);

        var getWeather = json.currently.icon;
        console.log("Current weather: " + json.currently.icon);
        //getWeather="partly-cloudy-night";
        /*
   List of possible weathers
   clear-day
   clear-night
   rain
   snow
   sleet
   wind
   fog
   cloudy
   partly-cloudy-day
   partly-cloudy-night
   */

        if (getWeather === "clear-day") {
          $("body").css({
            background:
              "url('http://www.zastavki.com/pictures/originals/2014/Nature___Seasons___Spring_Clear_day_in_spring_field_067763_.jpg') no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "padding-bottom": "25%"
          });
          $("#weather-icon").attr(
            "src",
            "https://image.flaticon.com/icons/png/512/52/52017.png"
          );
          $("#temp-unit").css("color", "white");
        } else if (getWeather === "clear-night") {
          $("body").css({
            background:
              "url('http://i.imgur.com/HF3Xxg1.jpg') no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "padding-bottom": "25%"
          });
		$("#title").css("color", "white");
          $("#temp-value").css("color", "white");
          $("#location").css("color", "white");

          $("#weather-icon").attr(
            "src",
            "https://d30y9cdsu7xlg0.cloudfront.net/png/253670-200.png"
          );
        } else if (getWeather === "rain") {
          $("body").css({
            background:
              "url('http://52.24.98.51/wp-content/uploads/2017/03/rain.jpg') no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "padding-bottom": "25%"
          });

          $("#temp-unit").css("color", "blue");
          $("#weather-icon").attr(
            "src",
            "https://cdn3.iconfinder.com/data/icons/chubby-weather/403/rain_less-512.png"
          );
        } else if (getWeather === "snow") {
          $("body").css({
            background:
              "url('https://previews.123rf.com/images/adam1975/adam19751010/adam1975101000003/8143605-View-of-bench-and-trees-through-snowing-Blue-tone--Stock-Photo-snowing-snow.jpg') no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "padding-bottom": "25%"
          });

          $("#temp-unit").css("color", "blue");
          $("#weather-icon").attr(
            "src",
            "https://maxcdn.icons8.com/Share/icon/Weather//snow1600.png"
          );
        } else if (getWeather === "sleet") {
          $("body").css({
            background:
              "url('https://cdn0.artstation.com/p/assets/images/images/001/945/128/large/daniel-robson-slush-03.jpg?1454964198') no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "padding-bottom": "25%"
          });

          $("#weather-icon").attr(
            "src",
            "http://www.iconarchive.com/download/i92065/icons8/windows-8/Weather-Sleet.ico"
          );
          $("#temp-unit").css("color", "blue");
        } else if (getWeather === "wind") {
          $("body").css({
            background:
              "url('https://s-media-cache-ak0.pinimg.com/originals/5b/c2/ec/5bc2ec8bc05e151d8e68c7c20cae579f.jpg') no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "padding-bottom": "25%"
          });

          $("#weather-icon").attr(
            "src",
            "https://cdn3.iconfinder.com/data/icons/weather-icons-8/512/weather-windy-512.png"
          );
          $("#temp-unit").css("color", "blue");
        } else if (getWeather === "fog") {
          $("body").css({
            background:
              "url('http://images.faena.com/wp-content/uploads/sites/4/2016/09/fog-forest-nature-640-9331-cool.jpg') no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "padding-bottom": "25%"
          });

          $("#weather-icon").attr(
            "src",
            "https://cdn1.iconfinder.com/data/icons/weather-18/512/fog_mist-512.png"
          );
          $("#temp-unit").css("color", "blue");
        } else if (getWeather === "cloudy") {
          $("body").css({
            background:
              "url('https://upload.wikimedia.org/wikipedia/commons/a/a3/Overcast_skies_from_Tropical_Storm_Danny.jpg') no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "padding-bottom": "25%"
          });

          $("#weather-icon").attr(
            "src",
            "https://image.flaticon.com/icons/svg/53/53934.svg"
          );
          $("#temp-unit").css("color", "blue");
        } else if (getWeather === "partly-cloudy-day") {
          $("body").css({
            background:
              "url('https://abysmalarnav.files.wordpress.com/2015/10/12170068_529003527268922_254779887_o.jpg') no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "padding-bottom": "25%"
          });

          $("#weather-icon").attr(
            "src",
            "http://icons.iconarchive.com/icons/icons8/android/512/Weather-Partly-Cloudy-Day-icon.png"
          );
          $("#temp-unit").css("color", "blue");
        } else if (getWeather === "partly-cloudy-night") {
          $("body").css({
            background:
              "url('http://2.bp.blogspot.com/_50Ig_niqpyI/S7Fc9XRx6lI/AAAAAAAABRA/DE8yQMDygJM/s1600/mar+29+full+moon+g+cloudy.jpg') no-repeat center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "padding-bottom": "25%"
          });
          $("#title").css("color", "white");
          $("#temp-value").css("color", "white");
          $("#location").css("color", "white");
          $("#weather-icon").attr(
            "src",
            "http://www.iconsdb.com/icons/preview/white/partly-cloudy-night-xxl.png"
          );
        }

        $("#temp-value").text(getTemperature);

        var currentTemp = getTemperature;

        $("#temp-unit").on("click", function() {
          if (isFahrenheit == true) {
            currentTemp = (currentTemp - 32) * (5 / 9);
            isFahrenheit = false;
            $("#temp-unit").text("°C");
          } else {
            currentTemp = currentTemp * (9 / 5) + 32;
            isFahrenheit = true;
            $("#temp-unit").text("°F");
          }

          currentTemp = Math.round(currentTemp);
          $("#temp-value").text(currentTemp);
        });

        var GEOCODING =
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          position.coords.latitude +
          "%2C" +
          position.coords.longitude +
          "&language=en";

        $.getJSON(GEOCODING).done(function(location) {
          $("#location").html(
            location.results[0].address_components[2].long_name +
              ", " +
              location.results[0].address_components[4].long_name
          );
        });
      }
    );
  });
});
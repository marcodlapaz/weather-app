window.addEventListener("load", () => {
  let lon;
  let lat;

  let valor = document.getElementById("valor");
  let description = document.getElementById("description");
  let city = document.getElementById("city");
  let icon = document.getElementById("icon");
  let wind = document.getElementById("wind");
  let velocity = document.getElementById("velocity");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=403f6783ab5fbcfad2dc8c95c91de264&units=metric&lang=es`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let temp = Math.round(data.main.temp);
          valor.textContent = `${temp} °C`;

          let desc = data.weather[0].description;
          description.textContent = desc.toUpperCase();

          city.textContent = data.name;

          velocity.textContent = `${data.wind.speed} m/s`;

          switch (data.weather[0].main) {
            case "Thunderstorm":
              icon.src = "../assets/animated/thunder.svg";
              console.log("Tormenta");
              break;
            case "Drizzle":
              icon.src = "../assets/animated/rainy-2.svg";
              console.log("Llovizna");
              break;
            case "Rain":
              icon.src = "../assets/animated/rainy-7.svg";
              console.log("Lluvia");
              break;
            case "Snow":
              icon.src = "../assets/animated/snowy-6.svg";
              console.log("Nieve");
              break;
            case "Clear":
              icon.src = "../assets/animated/day.svg";
              console.log("Límpio");
              break;
            case "Atmosphere":
              icon.src = "../assets/animated/weather.svg";
              console.log("Atmósfera");
              break;
            case "Clouds":
              icon.src = "../assets/animated/cloudy-day-1.svg";
              console.log("Nubes");
              break;
            default:
              break;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
});

const apiKey = "828cc99e0335c9476a8f751b7c386d9a";

async function getWeather() {
  const city = document.getElementById("city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = `${data.main.temp}°C`;
    document.getElementById("description").innerText =
      data.weather[0].description;
    document.getElementById("humidity").innerText =
      `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `Wind: ${data.wind.speed} km/h`;
    document.getElementById("mintp").innerText =
      `min temp : ${data.main.temp_min} C`;
    document.getElementById("maxtp").innerText =
      `max temp : ${data.main.temp_max} C`;
    const icon = data.weather[0].icon;
    document.getElementById("weatherIcon").src =
      `https://openweathermap.org/img/wn/${icon}@2x.png`;
  } catch (error) {
    alert(error.message);
  }
}

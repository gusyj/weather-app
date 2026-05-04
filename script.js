async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const apiKey = "2493a7121e18a7f6007f1ab664eb1393";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("result").innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById("result").innerHTML = "City not found";
    }
  } catch (error) {
    console.error(error);
  }
}

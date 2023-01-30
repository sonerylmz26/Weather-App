const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  getData(cityInput.value);
});

function getData(name) {
  const API = "d07b3bcb98fa368fcac9f5c07c483ec7";
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;
  console.log(baseURL);
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      const {
        name,
        sys: { country },
        main: { temp, feels_like },
        weather: [{ description }],
        wind: { speed },
      } = data;

      const city = document.querySelector("#sehir");
      const temperature = document.querySelector("#sicaklik");
      const weatherDesc = document.querySelector("#havaDurumu");
      const feel = document.querySelector("#Hissedilen");
      const wind = document.querySelector(".wind");
      city.textContent = `${name},${country}`;
      weatherDesc.textContent = `${description}`;
      temperature.textContent = `${temp}`;
      feel.textContent = `${feels_like}`;
      wind.textContent = `${speed}`;
    })
    .catch((err) => console.warn(err));
}

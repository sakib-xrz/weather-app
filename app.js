const loadData = async (city) => {
  const API_KEY = "867b2fd46eaf1b81b5a4e98ed3461250";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  displayInfo(data);
};

const displayInfo = (data) => {
  const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const icon = document.getElementById('weather-icon');
  icon.setAttribute('src', url);

  const cityName = document.getElementById("city");
  cityName.innerText = data.name;

  const temperature = document.getElementById("temperature");
  temperature.innerText = data.main.temp;

  const condition = document.getElementById("condition");
  condition.innerText = data.weather[0].main;
};

const search_process = () => {
  const search_field = document.getElementById("search-field");
  const city = search_field.value;
  loadData(city);
  search_field.value = "";
};

const search_click = () => {
  search_process();
};

document
  .getElementById("search-field")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      search_process();
    }
  });

loadData("dhaka");

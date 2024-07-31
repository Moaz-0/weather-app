const api_key = "1f8d9a3ba0474f109d1205129242907";
let search_input = document.querySelector("nav div input");
let country = search_input.value;
search_input.addEventListener("input", () => {
  console.clear();
  country = search_input.value;
  country_div(search_input.value);
  country_details(country);
});
search_input.addEventListener("blur",()=>{
  console.clear();
})
function country_div(c_value) {
  if (c_value.length >= 3) {
    document.querySelector("nav div .search-result").style.display = "block";
    get_info();
  } else {
    document.querySelector("nav div .search-result").style.display = "none";
  }
}
function get_info() {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${country}`
  )
    .then((data) => {
      let the_data = data.json();
      return the_data;
    })
    .then((weather_data) => {
      document.querySelector(
        "nav div .search-result .degree-span"
      ).textContent = `${weather_data.current.temp_c}ْ`;
      document.querySelector(
        "nav div .search-result .info .loc-value"
      ).textContent = weather_data.location.name;
      document.querySelector(
        "nav div .search-result .info .cou-value"
      ).textContent = weather_data.location.country;
      document.querySelector(
        "nav div .search-result .info .deg-value"
      ).textContent = `${weather_data.current.temp_c}ْ`;
      document.querySelector(
        "nav div .search-result .info .wind-value"
      ).textContent = weather_data.current.wind_dir;
    })
}
const egyptianGovernorates = [
  "Cairo",
  "Alexandria",
  "Giza",
  "Port Said",
  "Suez",
  "Luxor",
  "Aswan",
  "Assiut",
  "Beni Suef",
  "Dakahlia",
  "Damietta",
  "Faiyum",
  "Gharbia",
  "Ismailia",
  "Kafr El Sheikh",
  "Matruh",
  "Minya",
  "Monufia",
  "New Valley",
  "North Sinai",
  "Qalyubia",
  "Qena",
  "Red Sea",
  "Sharqia",
  "Sohag",
  "South Sinai",
];

for (let i = 0; i < egyptianGovernorates.length; i++) {
  countries_info(egyptianGovernorates[i]);
}

function countries_info(i) {
  let main_div = document.createElement("div");
  document.querySelector(".container").appendChild(main_div);
  main_div.classList.add("main");

  let t_info = document.createElement("div");
  main_div.appendChild(t_info);
  t_info.classList.add("t-info");
  let t_info_img = document.createElement("img");
  t_info.appendChild(t_info_img);
  t_info_img.src = "assets/cloudy.png";
  let w_today = document.createElement("span");
  t_info.appendChild(w_today);
  w_today.classList.add("w-today");

  let day_degree = document.createElement("span");
  t_info.appendChild(day_degree);
  day_degree.classList.add("day-degree");

  let info = document.createElement("div");
  main_div.appendChild(info);
  info.classList.add("info");

  let location = document.createElement("div");
  info.appendChild(location);
  location.classList.add("location");
  let loc_name = document.createElement("span");
  location.appendChild(loc_name);
  loc_name.textContent = "Location: ";
  let loc_value = document.createElement("span");
  location.appendChild(loc_value);
  loc_value.classList.add("loc-value");

  let cou = document.createElement("div");
  info.appendChild(cou);
  cou.classList.add("country");
  let cou_name = document.createElement("span");
  cou.appendChild(cou_name);
  cou_name.textContent = "Country: ";
  let cou_value = document.createElement("span");
  cou.appendChild(cou_value);
  cou_value.classList.add("cou-value");

  let degree = document.createElement("div");
  info.appendChild(degree);
  location.classList.add("degree");
  let deg_name = document.createElement("span");
  degree.appendChild(deg_name);
  deg_name.textContent = "Degree: ";
  let deg_value = document.createElement("span");
  degree.appendChild(deg_value);
  deg_value.classList.add("deg-value");

  let humidity = document.createElement("div");
  info.appendChild(humidity);
  humidity.classList.add("wind-speed");
  let humidity_name = document.createElement("span");
  humidity.appendChild(humidity_name);
  humidity_name.textContent = "Humidity: ";
  let humidity_value = document.createElement("span");
  humidity.appendChild(humidity_value);
  humidity_value.classList.add("humidity-value");
  let wind = document.createElement("div");
  info.appendChild(wind);
  wind.classList.add("wind");
  let wind_name = document.createElement("span");
  wind.appendChild(wind_name);
  wind_name.textContent = "Wind direction: ";
  let wind_value = document.createElement("span");
  wind.appendChild(wind_value);
  wind_value.classList.add("wind-value");

  let wind_speed = document.createElement("div");
  info.appendChild(wind_speed);
  wind_speed.classList.add("wind-speed");
  let wind_speed_name = document.createElement("span");
  wind_speed.appendChild(wind_speed_name);
  wind_speed_name.textContent = "Wind speed: ";
  let wind_speed_value = document.createElement("span");
  wind_speed.appendChild(wind_speed_value);
  wind_speed_value.classList.add("wind-speed-value");

  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${i}, Egypt`
  )
    .then((data) => {
      let the_data = data.json();
      return the_data;
    })
    .then((weather_data) => {
      // console.log(weather_data);
      w_today.textContent = weather_data.location.name;
      day_degree.textContent = `${weather_data.current.temp_c}ْ`;
      loc_value.textContent = weather_data.location.name;
      cou_value.textContent = weather_data.location.country;
      deg_value.textContent = `${weather_data.current.temp_c}ْ`;
      humidity_value.textContent = weather_data.current.humidity;
      wind_value.textContent = weather_data.current.wind_dir;
      wind_speed_value.textContent = `${weather_data.current.wind_kph} km`;
      if (cou_value.textContent === "Egypt" && cou_value.textContent !== "") {
        return 0;
      } else {
        cou_value.parentElement.parentElement.parentElement.remove();
      }
    });
}
function country_details(params) {
  if (params !== "Undefined") {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${params}`
    )
      .then((data) => {
        let the_data = data.json();
        return the_data;
      })
      .then((weather_data) => {
        document.querySelector(".country-details .location-name").textContent =
          weather_data.location.name;
        document.querySelector(
          ".country-details .degree-span"
        ).textContent = `${weather_data.current.temp_c}ْ`;
        document.querySelector(
          ".country-details .info .location .loc-value"
        ).textContent = weather_data.location.name;
        document.querySelector(
          ".country-details .info .country .cou-value"
        ).textContent = weather_data.location.country;
        document.querySelector(
          ".country-details .info .degree .deg-value"
        ).textContent = `${weather_data.current.temp_c}ْ`;
        document.querySelector(
          ".country-details .info .wind-dir .winddir-value"
        ).textContent = weather_data.current.wind_dir;
        document.querySelector(
          ".country-details .info .wind-speed .windspeed-value"
        ).textContent = `${weather_data.current.wind_kph} km`;
        document.querySelector(
          ".country-details .info .humidity .humidity"
        ).textContent = weather_data.current.humidity;
      });
  }
}
document.querySelector(".country-details i").onclick = () => {
  document.querySelector(".country-details").style.display = "none";
};
document.querySelector(".country-details .flow-div").onclick = () => {
  document.querySelector(".country-details").style.display = "none";
};
document.querySelector("nav div .search-result button").onclick = () => {
  document.querySelector(".country-details").style.display = "block";
};



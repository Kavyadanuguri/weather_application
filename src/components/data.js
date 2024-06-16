const API_KEY = "58dd7367d80d378561ca0e8befa43a20";

export const newfetchData = async (city, units = "metric") => {
  const URl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units${units}`;
  try {
    const res = await fetch(URl);
    const data = await res.json();

    const {
      name,
      main: { temp, feels_like, humidity, pressure, temp_max, temp_min },
      wind: { speed, deg },
      sys: { country },
    } = data;

    return {
      name,
      temp,
      feels_like,
      humidity,
      pressure,
      temp_max,
      temp_min,
      speed,
      deg,
      country,
    };
  } catch (err) {
    alert("please enter correct city");
  }
};

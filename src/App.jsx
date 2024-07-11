// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
const API_KEY = "5eedc90b83cefc290a099b1fe8a867a5";

import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./components/History";
import Homepage from "./components/Homepage";

const dummyData = [
  {
    city: "Delhi",
    country: "India",
    temp: 29,
    time: "11am",
    day: "Friday",
    hourlyTemp: {
      "11am": 35,
      "2pm": 35,
      "5pm": 27,
      "8pm": 29,
      "11pm": 29,
      "2am": 31,
      "5am": 28,
      "8am": 28,
    },
    forecast: [
      { day: "Friday", imgLink: "icon.png", maxtemp: "39", minTemp: "47" },
      { day: "Saturday", imgLink: "icon.png", maxtemp: "29", minTemp: "22" },
      { day: "Sunday", imgLink: "icon.png", maxtemp: "25", minTemp: "27" },
      { day: "Monday", imgLink: "icon.png", maxtemp: "34", minTemp: "29" },
    ],
  },
  {
    city: "Lahore",
    country: "Pakistan",
    temp: 23,
    time: "10pm",
    day: "Friday",
    hourlyTemp: {
      "10am": 36,
      "1pm": 37,
      "4pm": 28,
      "7pm": 30,
      "10pm": 29,
      "1am": 32,
      "4am": 29,
      "7am": 30,
    },
    forecast: [
      { day: "Friday", imgLink: "icon.png", maxtemp: "40", minTemp: "48" },
      { day: "Saturday", imgLink: "icon.png", maxtemp: "30", minTemp: "23" },
      { day: "Sunday", imgLink: "icon.png", maxtemp: "26", minTemp: "28" },
      { day: "Monday", imgLink: "icon.png", maxtemp: "35", minTemp: "30" },
    ],
  },
  {
    city: "Berlin",
    country: "Germany",
    temp: 19,
    time: "6pm",
    day: "Thursday",
    hourlyTemp: {
      "6pm": 16,
      "9pm": 17,
      "12pm": 28,
      "3am": 20,
      "6am": 13,
      "9am": 30,
      "12am": 29,
      "3pm": 20,
    },
    forecast: [
      { day: "Thursday", imgLink: "icon.png", maxtemp: "15", minTemp: "10" },
      { day: "Friday", imgLink: "icon.png", maxtemp: "20", minTemp: "18" },
      { day: "Saturday", imgLink: "icon.png", maxtemp: "10", minTemp: "13" },
      { day: "Sunday", imgLink: "icon.png", maxtemp: "16", minTemp: "18" },
    ],
  },
];

function App() {
  //default can be taken from browser location
  const [selectedCity, setSelectedCity] = useState({
    city: "Noida",
    country: "India",
    time: "11am",
    day: "Friday",
    temp: 16,
    hourlyTemp: {
      "11am": 16,
      "2pm": 20,
      "5pm": 20,
      "8pm": 17,
      "11pm": 22,
      "2am": 30,
      "5am": 27,
      "8am": 24,
    },
    forecast: [
      { day: "Friday", imgLink: "icon.png", maxtemp: "31", minTemp: "21" },
      { day: "Saturday", imgLink: "icon.png", maxtemp: "19", minTemp: "31" },
      { day: "Sunday", imgLink: "icon.png", maxtemp: "15", minTemp: "33" },
      { day: "Monday", imgLink: "icon.png", maxtemp: "41", minTemp: "19" },
    ],
  });

  const [historyArr, setHistoryArr] = useState([]);

  const [cityInput, setCityInput] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${API_KEY}`
  //     );
  //     const data = await res.json();
  //     console.log(data.message);
  //   };

  //   fetchData();
  // }, []);

  function handleSearch() {
    const data = dummyData.filter(
      (el) => el.city.toLowerCase() === cityInput.toLowerCase()
    );

    if (data.length > 0) {
      setSelectedCity(data[0]);
      let date = new Date();
      setHistoryArr([
        ...historyArr,
        [cityInput, date.toLocaleTimeString(), date.getDay(), data[0].temp],
      ]);
    } else alert("city not found");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              handleSearch={handleSearch}
              setCityInput={setCityInput}
              cityInput={cityInput}
              selectedCity={selectedCity}
            />
          }
        ></Route>
        <Route
          path="history"
          element={<History historyArr={historyArr} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

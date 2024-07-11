import Chart from "react-apexcharts";
import { MdSevereCold } from "react-icons/md";
import { MdSunny } from "react-icons/md";

function WeatherData({ selectedCity }) {
  const days = selectedCity.forecast;

  const hourlyTemp = Object.values(selectedCity.hourlyTemp);

  let options = {
    chart: {
      height: 280,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "temp",
        data: hourlyTemp,
      },
    ],
    xaxis: {
      categories: ["11am", "2pm", "5pm", "8pm", "11pm", "2am", "5am", "8am"],
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  };

  return (
    <div className="weatherData">
      <div>
        <span>{selectedCity.city}</span>, <span>{selectedCity.country}</span>
      </div>
      <p className="font-12">
        {selectedCity.day} {selectedCity.time}
      </p>
      <p color="font-12">mist</p>
      <div>
        {/* icon */}
        {/* <img></img> */}
        <p className="temp">
          {selectedCity.temp}
          <span>°C</span>
        </p>

        <div className="chartCont" id="chart">
          <Chart
            options={options}
            series={options.series}
            type="area"
            width="400"
          />
        </div>
        {/* <IoIosPartlySunny /> */}

        <div className="daysForcast">
          {days.map((el) => {
            return (
              <div key={el.day} className="eachForcast">
                <p>{el.day}</p>
                {el.maxtemp < 20 ? <MdSevereCold /> : <MdSunny />}
                <p>
                  {el.maxtemp}°C | {el.minTemp}°C
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WeatherData;

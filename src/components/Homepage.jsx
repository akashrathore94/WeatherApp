import InputComp from "./InputComp";
import WeatherData from "./WeatherData";

function Homepage({ handleSearch, selectedCity, cityInput, setCityInput }) {
  return (
    <main className="mainComp">
      <InputComp
        handleSearch={handleSearch}
        setCityInput={setCityInput}
        cityInput={cityInput}
      />
      <WeatherData selectedCity={selectedCity} />
    </main>
  );
}

export default Homepage;

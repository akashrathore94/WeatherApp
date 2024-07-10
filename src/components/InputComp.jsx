import { NavLink } from "react-router-dom";

function InputComp({ handleSearch, setCityInput, cityInput }) {
  return (
    <div>
      <div className="titleDiv">
        <h1>Weather</h1>
      </div>
      <div className="searchCont">
        <input
          className="searchInput"
          type="text"
          placeholder="City..."
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        ></input>
        <button className="searchBtn" onClick={handleSearch}>
          Search
        </button>
        <NavLink className="historyBtn" to="history">
          History
        </NavLink>
      </div>
    </div>
  );
}

export default InputComp;

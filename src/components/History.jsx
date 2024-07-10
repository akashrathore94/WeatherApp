import { NavLink } from "react-router-dom";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function History({ historyArr }) {
  return (
    <div className="historyPage">
      <div className="btnCont">
        <NavLink to="/" className="backBtn">
          Back
        </NavLink>
      </div>
      <div className="searchHistories">
        {historyArr.length > 0 ? (
          historyArr.map((el) => {
            return (
              <div className="searchHistory">
                <div>
                  {/* using this logic in span to capatalise first word */}
                  <span>
                    {el[0].split("")[0].toUpperCase() + el[0].slice(1)}
                  </span>{" "}
                  <span>{el[3]}°C</span> <span>{days[el[2]]}</span>{" "}
                  <span>{el[1]}</span>
                </div>
                <div>
                  <MdEdit />
                  <MdDelete />
                </div>
              </div>
            );
          })
        ) : (
          <p className="searchHistory">no element searched yet</p>
        )}
      </div>
    </div>
  );
}

export default History;

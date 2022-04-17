import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [numberEntered, setNumberEntered] = useState("");

  const handleFilter = (event) => {
    const searchnumber = event.target.value;
    setNumberEntered(searchNumber);
    const newFilter = data.filter((value) => {
      return value.title().includes(searchnumber());
    });

    if (searchnumber === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setNumberEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="numbers"
          placeholder={placeholder}
          value={numberEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
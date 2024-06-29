import React, { useEffect, useState, useCallback } from "react";
import "../style.css";
import Suggestion from "./Suggestion";
import lodash, { debounce } from "lodash";
const Autocomplete = () => {
  // state for the search result
  const [searchResult, setsearchResult] = useState([]);

  // state to handle the errors
  const [error, setError] = useState(null);

  //state to handle the loading
  const [loading, setloading] = useState(false);

  //state for the input value.
  const [InputValue, setInputValue] = useState("");

  const func = () => {
    setError(null);
    setloading(true);
    try {
      fetch(`https://dummyjson.com/recipes/search?q=${InputValue}`)
        .then((res) => res.json())
        .then((res) => {
          setsearchResult(res.recipes);
        });
    } catch (error) {
      setError("Internal error");
      setsearchResult([]);
    } finally {
      setloading(false);
    }
  };
  const getSuggestionsDebounced = useCallback(debounce(func, 500), []);
  // use effect hook to fetch data from the api.
  useEffect(() => {
    if (InputValue.length > 1) {
      getSuggestionsDebounced();
    } else {
      setsearchResult([]);
    }
  }, [InputValue]);

  // Function to handle the change function for the input.
  const HandleonChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  return (
    <div className="container">
      <input
        type="text"
        className="Input_container"
        value={InputValue}
        onChange={HandleonChange}
      />
      {
        <div className="suggestion-box">
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {!error && !loading && (
            <Suggestion searchResult={searchResult} highlight={InputValue} />
          )}
        </div>
      }
    </div>
  );
};

export default Autocomplete;

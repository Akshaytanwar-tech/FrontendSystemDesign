import React from "react";
import "../style.css";
const Suggestion = ({ searchResult, highlight }) => {
  const GetHighlighted = (text, highlight) => {
    const split = text.split(new RegExp(`(${highlight})`, "gi"));

    return (
      <>
        {split.map((e) => {
          return e.toLowerCase() === highlight.toLowerCase() ? (
            <b style={{ color: "blue" }}>{highlight}</b>
          ) : (
            e
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="suggestion-container">
        {searchResult.map((e, i) => {
          return (
            <div className="suggestion-text" key={i}>
              {GetHighlighted(e.name, highlight)}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Suggestion;

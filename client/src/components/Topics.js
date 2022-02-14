import React from "react";
import { useSelector } from "react-redux";
import { selectEntries } from "../store/entries";
import keySort from "../helperFunctions/keySort";

const Topics = () => {
  const { entries } = useSelector(selectEntries);
  let KS = keySort(entries.entries);
  return (
    <div
      style={{
        display: "flex",
        gridColumn: "1/-1",
        alignItems: "flex-start",
      }}
    >
      <div className="p-3 mb-2 bg-warning text-dark" style={{}}>
        <h3 style={{}}>Topics:</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {entries.loading === "loading..."
          ? "Loading..."
          : KS[0].map((k) => {
              return <p style={{ margin: "22.5px" }}>{k}</p>;
            })}
      </div>
    </div>
  );
};

export default Topics;

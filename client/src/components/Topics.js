import React from "react";
import { useSelector } from "react-redux";
import { selectEntries } from "../store/entries";
import keySort from "../helperFunctions/keySort";

const Topics = () => {
  const { entries } = useSelector(selectEntries);
  let KS = keySort(entries.entries);
  return (
    <div
      className="bg-primary text-white"
      style={{
        display: "flex",
        gridColumn: "1/-1",
        // alignItems: "flex-start",
      }}
    >
      <div className="p-3 bg-warning text-dark" style={{}}>
        <h3 style={{}}>Topics: ({KS[0].sort().length})</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingTop: "7.5px",
        }}
      >
        {entries.loading === "loading..."
          ? "Loading..."
          : KS[0].map((k) => {
              return <p style={{ margin: "15px" }}>{k}</p>;
            })}
      </div>
    </div>
  );
};

export default Topics;

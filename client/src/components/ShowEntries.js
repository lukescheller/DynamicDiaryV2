import React from "react";
import { useSelector } from "react-redux";
import { selectEntries } from "../store/entries";
import Ind_Entry from "./Ind_Entry";
import styles from "./style/ShowEntries.module.css";

const ShowEntries = (props) => {
  const { entries } = useSelector(selectEntries);

  return (
    <div className={styles.wrapper}>
      {entries.loading === "loading"
        ? "loading..."
        : entries.entries
            .map((e, index) => (
              <Ind_Entry>
                <h2
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid black",
                    padding: "5px",
                    margin: "5px",
                    marginBottom: "35px",
                  }}
                >
                  {e.date}
                </h2>
                <strong style={{ margin: "5px" }}>Entry: #{index + 1}</strong>
                {Object.keys(e.entry).map((key) => {
                  return (
                    <p style={{ margin: "5px" }}>
                      <strong>{key}</strong>: {e.entry[key]}
                    </p>
                  );
                })}
              </Ind_Entry>
            ))
            // I'm a fucking genius with this reverse()...
            .reverse()}
    </div>
  );
};

export default ShowEntries;

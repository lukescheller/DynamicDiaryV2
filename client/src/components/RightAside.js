import React from "react";
import styles from "./style/RightAside.module.css";
import { useSelector } from "react-redux";
import { selectEntries } from "../store/entries";
import keySort from "../helperFunctions/keySort";

const RightAside = () => {
  const { entries } = useSelector(selectEntries);
  let KS = keySort(entries.entries);
  return (
    <div className="p-3 mb-2 bg-light text-dark" id={styles.wrapper}>
      <div style={{}}>
        {Object.keys(KS[1]).map((key) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "5px",
                borderBottom: "1px solid black",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <h3
                  style={{
                    margin: "5px",
                    padding: "5px",
                    textAlign: "left",
                  }}
                >
                  {key}:
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {KS[1][key].map((arr) => {
                  return (
                    <div
                      style={{
                        margin: "5px",
                        padding: "5px",
                      }}
                    >
                      {arr === "yes" ? (
                        <img src="https://img.icons8.com/fluency/48/000000/instagram-check-mark.png" />
                      ) : (
                        <img src="https://img.icons8.com/emoji/48/000000/cross-mark-button-emoji.png" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightAside;

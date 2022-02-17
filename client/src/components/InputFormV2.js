import React, { useState } from "react";
import formCheck from "../helperFunctions/formCheck";
import objBuilder from "../helperFunctions/objBuilder";
import POST_entry from "../DB_functions/POST_entry";
import styles from "./style/InputFormV2.module.css";

const InputFormV2 = () => {
  // the state always begins with an object that'll be used to generate new input fields - don't quite understand why they're not blank
  const [topicsList, setTopicsList] = useState([]);

  const [submitErr, setSubmitErr] = useState(false);

  const inputChangeHandler = (event, index) => {
    //this represents the state which is an array
    //you'll add the spread operator so everything from topicsList won't be overriden
    const stateArray = [...topicsList];
    //what this essentially means is -> stateArray[0].topic (or content) = event.target.value -> [0] is whichever form input you're in
    //the key within the state's objects never change - just the values
    stateArray[index][event.target.name] = event.target.value;
    //this will now reset topicsList by targeting a specific object within topicsList
    setTopicsList(stateArray);
  };

  const removeFormInputHandler = (index) => {
    setSubmitErr(false);
    const list = [...topicsList];
    list.splice(index, 1);
    setTopicsList(list);
  };

  const addInputFieldHandler = () => {
    setSubmitErr(false);
    setTopicsList([...topicsList, { topic: "", content: "" }]);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let fc = formCheck(topicsList);
    if (fc && topicsList.length > 0) {
      let obj = objBuilder(topicsList);
      POST_entry(obj);
      window.location.reload(false);
    } else {
      setSubmitErr(true);
    }
  };

  // you'll have 2 returns - 1 for the component - 1 for the map function
  return (
    <div id={styles.wrapper} className="p-3 bg-light text-dark">
      <div>
        <button
          onClick={addInputFieldHandler}
          className="btn btn-warning"
          id={styles.add}
        >
          Add Input Field
        </button>
      </div>
      <div>
        <form onSubmit={onSubmitHandler}>
          {/* item - IMPORTANT - first you did topicsList.topic and topicsList.content - this made it so the last item in the state array would be deleted instead of the one you want.... */}
          {/* index will be passed to the onChanges - this will enable us to differentiate between objects within the state */}
          {topicsList.map((item, index) => {
            // input form being created
            return (
              <div key={index} className={styles.border}>
                <input
                  className={styles.ind}
                  type="text"
                  name="topic"
                  placeholder="topic"
                  value={item.topic}
                  //event is an object that's being passed along by onChange - index is being passed along from map
                  onChange={(event) => inputChangeHandler(event, index)}
                />
                <input
                  id={styles.content}
                  className={styles.ind}
                  type="text"
                  name="content"
                  placeholder="content"
                  value={item.content}
                  onChange={(event) => inputChangeHandler(event, index)}
                />
                <input
                  id={styles.remove}
                  className="btn btn-danger"
                  type="button"
                  value="remove"
                  onClick={() => removeFormInputHandler(index)}
                />
              </div>
            );
          })}
          {submitErr && (
            <p className="p-3 mb-2 bg-danger text-white">
              Error: Topics can't match and content fields can't be empty
            </p>
          )}
          <button type="submit" className="btn btn-success" id={styles.submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputFormV2;

const formCheck = (array) => {
  let topicCheck = [];
  let check = true;
  for (let x = 0; x < array.length; x++) {
    // array[x].topic.replace(/\s+/g, "");
    let topic_noSpace = array[x].topic.replace(/\s+/g, "");
    let topic_noSpace1 = topic_noSpace.trimStart();
    // console.log(array[x].topic.replace(/\s+/g, ""));
    //if topic empty return false
    if (topic_noSpace1.trim() === "") {
      check = false;
      return check;
      // return "Topic field: " + (x + 1) + " is empty";
    }
    //if topic already in array return false
    if (!topicCheck.includes(topic_noSpace1.toLowerCase().trim())) {
      topicCheck.push(topic_noSpace1.toLowerCase().trim());
    } else {
      check = false;
      return check;
      // return "Topic fields must all have different titles";
    }
  }
  //if content empty return false
  for (let y = 0; y < array.length; y++) {
    if (array[y].content.trim() === "") {
      check = false;
      return check;
    }
  }
  return check;
};

export default formCheck;

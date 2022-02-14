const formCheck = (array) => {
  let topicCheck = [];
  let check = true;
  for (let x = 0; x < array.length; x++) {
    //if topic empty return false
    if (array[x].topic.trim() === "") {
      check = false;
      return check;
      // return "Topic field: " + (x + 1) + " is empty";
    }
    //if topic already in array return false
    if (!topicCheck.includes(array[x].topic.toLowerCase())) {
      topicCheck.push(array[x].topic.toLowerCase());
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

const objBuilder = (array) => {
  let obj = {};
  for (let x = 0; x < array.length; x++) {
    obj[array[x].topic.toLowerCase()] = array[x].content.toLowerCase();
  }
  return obj;
};

export default objBuilder;

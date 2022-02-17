const keySort = (array) => {
  let keysSorted = [];
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < Object.keys(array[x].entry).length; y++) {
      if (!keysSorted.includes(Object.keys(array[x].entry)[y])) {
        keysSorted.push(Object.keys(array[x].entry)[y]);
      }
    }
  }

  //get dates
  let datesSorted = [];
  for (let x = 0; x < array.length; x++) {
    if (!datesSorted.includes(array[x].date)) {
      datesSorted.push(array[x].date);
    }
  }

  //create an array with multiple arrays in it
  //each array will represent a day - they'll be in order
  // [
  //   ['a','coding','reality tv','anxiety'],
  //   ['anxiety','more data','code']
  // ]
  //the arrays don't need to/won't have to have the same length

  let array_group = [];
  let ind_array = [];
  for (let x = 0; x < datesSorted.length; x++) {
    // this will - in a sense - combine the dates since there can be multiple entries within the same day
    ind_array = [];
    for (let y = 0; y < array.length; y++) {
      if (datesSorted[x] == array[y].date) {
        for (const [key, value] of Object.entries(array[y].entry)) {
          if (!ind_array.includes(key)) {
            ind_array.push(key);
          }
        }
      }
    }
    array_group.push(ind_array);
  }
  // console.log(array_group);

  // for (const [key, value] of Object.entries(array[y].entry)) {
  //   //   console.log(key);
  //   // }

  //code: [y,n,n,y,y,y,y,n]
  //loop through dates
  //loop through topics
  //push to array if it doesn't include it already
  //
  // {
  //   code: [y, y],
  //   style: [n, y],
  //   anxiety: [y, y],
  //   test: [n, n]
  // }

  // let final_obj = {};
  // let final_obj_title = "";
  // let final_obj_array = [];

  // for (let z = 0; z < keysSorted.length; z++) {
  //   // console.log("INDIVIDUAL " + keysSorted[z]);
  //   final_obj_title = keysSorted[z];
  //   for (let b = 0; b < array_group.length; b++) {
  //     for (let c = 0; c < array_group[b].length; c++) {
  //       // console.log("KEYS " + array_group[b][c]);
  //     }
  //   }
  //   final_obj[keysSorted[z]] = final_obj_array;
  //   final_obj_title = "";
  //   final_obj_array = [];
  // }
  // console.log(final_obj);

  let final_obj = {};
  let final_obj_array = [];

  for (let x = 0; x < keysSorted.length; x++) {
    final_obj_array = [];
    //go through for as many different days exist
    for (let y = 0; y < array_group.length; y++) {
      //go through for as many different days exist
      if (array_group[y].includes(keysSorted[x])) {
        final_obj_array.push("yes");
      } else {
        final_obj_array.push("no");
      }
    }
    final_obj[keysSorted[x]] = final_obj_array;
  }
  // console.log(final_obj);
  return [keysSorted, final_obj];
};

export default keySort;

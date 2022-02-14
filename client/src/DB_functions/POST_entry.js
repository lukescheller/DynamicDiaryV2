import axios from "axios";
const POST_entry = (obj) => {
  axios.post("/entry", obj);
};

export default POST_entry;

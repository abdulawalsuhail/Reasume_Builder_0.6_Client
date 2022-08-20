import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "https://lit-ravine-09639.herokuapp.com/",
});
export default axiosFetch;

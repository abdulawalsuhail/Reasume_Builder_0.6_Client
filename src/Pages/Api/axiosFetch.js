import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "https://writorcc-server-06.herokuapp.com/",
});
export default axiosFetch;

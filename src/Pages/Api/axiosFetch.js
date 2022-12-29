import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "https://resumebuilder06server-production-b922.up.railway.app/",
  // baseURL: "http://localhost:5000/",
});
export default axiosFetch;

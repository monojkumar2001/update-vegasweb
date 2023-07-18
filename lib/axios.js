import axios from "axios";

export default axios.create({
  baseURL: "http://metacookiesnft.com/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

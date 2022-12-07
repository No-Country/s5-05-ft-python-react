import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pbwebservice.onrender.com/api/",
  /*   timeout: 1000, */
  headers: { "X-Custom-Header": "foobar" },
  mode: "cors",
});

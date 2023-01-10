import axios from "axios";

export const instance = axios.create({
  baseURL: "https://s5-05-ft-python-react-production.up.railway.app/api/",
  /*   timeout: 1000, */
  headers: { "X-Custom-Header": "foobar" },
  mode: "cors",
});

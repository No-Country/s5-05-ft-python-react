import axios from "axios";

export const instance = axios.create({
	baseURL: "http://127.0.0.1:8000/api/",
	timeout: 1000,
	headers: { "X-Custom-Header": "foobar" },
	mode: "cors",
});

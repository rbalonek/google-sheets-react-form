import axios from "axios";

const baseURL =
  "https://v1.nocodeapi.com/rbalonek/google_sheets/RLnoQGmgSElGTYmJ?tabId=Sheet1";

const api = axios.create({
  baseURL: baseURL,
});

export default api;

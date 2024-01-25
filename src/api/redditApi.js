// third-party
import axios from "axios";

// project imports
import { ACCESS_TOKEN, BASE_URL } from "../enviroment";

export const redditApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `bearer ${ACCESS_TOKEN}`,
  },
});

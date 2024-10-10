import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://systemserver.kandokar.com/api/v1",
});
export { axiosInstance };

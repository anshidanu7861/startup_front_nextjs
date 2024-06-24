import axios from "axios";

const axiosConfig = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/api/students`,
});

export default axiosConfig;

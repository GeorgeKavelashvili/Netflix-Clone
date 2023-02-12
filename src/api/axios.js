import axios from "axios";
const instance = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/550?api_key=cea1a67e428fbdcaa4dc4a34f976b3b1",
});
export default instance;

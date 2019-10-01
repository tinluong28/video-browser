import axios from 'axios';

const KEY = "AIzaSyBcW69jfSSAW35qs9fCSWiy44zExIcpNKc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        key: KEY
    }
})
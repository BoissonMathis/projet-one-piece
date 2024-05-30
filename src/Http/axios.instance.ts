import axios from "axios";

export const http = axios.create({
    baseURL: 'https://api.api-onepiece.com/v2/',
});
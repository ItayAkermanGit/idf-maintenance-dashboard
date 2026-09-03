import axios, { InternalAxiosRequestConfig } from "axios";

export const API = axios.create({
    baseURL: "http://127.0.0.1:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

API.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("token");
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
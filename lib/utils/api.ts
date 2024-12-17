import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
  } from "axios";
  
  const app_api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKENDURL,
  });
  
  app_api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      throw error;
    }
  );
  
  app_api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      return config;
    },
    (error: AxiosError) => {
      throw error;
    }
  );
  
  export default app_api;
  
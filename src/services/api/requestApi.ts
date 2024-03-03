import { TRequestConfig } from "../../models/TRequestConfig";

export const getRequestConfig = ({ method }: TRequestConfig) => {

  return {
    method: method,
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    params: {
        q: 'Saint Petersburg',
        appid: '720effd0315ebe9a6b4ad530b76e9182',
        lang: 'ru',
        units: 'metric'
    }
  };
};
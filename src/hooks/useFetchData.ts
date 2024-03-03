import { useEffect, useState } from "react"
import { IRequest } from "../models/IRequest";
import { getRequestConfig } from "../services/api/requestApi";
import axios from "axios";

export const useFetchData = () => {
    const [data, setData] = useState<IRequest | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({isError: false, errorMessage: ''});

    useEffect(() => {
        const fetchWeatherData = async() => {
            const controller = new AbortController();
            const requestConfig = getRequestConfig({method: 'GET'});

            try {
                setLoading(true);
                setError({ isError: false, errorMessage: '' })
                const response = await axios({
                    ...requestConfig,
                    signal: controller.signal
                })
                setData(response.data);
                
            } catch (error) {
                setError({isError: true, errorMessage: 'There is an error!'})
            } finally {
                setLoading(false);
            }
        }
        fetchWeatherData();
    }, [])

    return { data, loading, error };
}
// api.ts
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface APIError {
    statusCode: number;
    errorCode: number;
    message: string;
    timestamp: Date;
}

export interface APIResponse<T> {
    statusCode: number;
    errorCode: number;
    message: string;
    result: T;
    timestamp: Date;
}

const client: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
});

export const getData = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
    try {
        const response = await client.get<APIResponse<T>>(url, config);
        return response.data;
    } catch (error: any) {
        const apiError: APIError = {
            statusCode: error.response?.status || 500,
            errorCode: 0,
            message: error.message || 'Unknown error',
            timestamp: new Date(),
        };
        throw apiError;
    }
};

export const postData = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
    try {
        const response = await client.post<APIResponse<T>>(url, data, config);
        return response.data;
    } catch (error: any) {
        const apiError: APIError = {
            statusCode: error.response?.status || 500,
            errorCode: 0,
            message: error.message || 'Unknown error',
            timestamp: new Date(),
        };
        throw apiError;
    }
};

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class PokeAxiosClient {
    private instance: AxiosInstance;

    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    }

    private handleResponse<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    private handleError(error: any) {
        console.error('API error:', error);
        return Promise.reject(error);
    }

    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get<T>(url, config).then(this.handleResponse);
    }
}

export default PokeAxiosClient;

import axios, { AxiosInstance } from 'axios';

class APIAxiosInstance {
    private static instance: AxiosInstance;

    private constructor() {}

    public static getInstance(): AxiosInstance {
        if (!APIAxiosInstance.instance) {
            APIAxiosInstance.instance = axios.create({
                baseURL: import.meta.env.VITE_APP_API_URL,
                timeout: 5000,
                headers: {
                    'Cache-Control': 'max-age=3600',
                    'Content-Encoding': 'gzip'
                },
                // 응답 압축
                decompress: true
            });

            // 응답 캐싱
            this.instance.interceptors.response.use(
                (response) => {
                    if (response.data) {
                        sessionStorage.setItem(
                            response.config.url || '',
                            JSON.stringify(response.data)
                        );
                    }
                    return response;
                }
            );
        }
        return APIAxiosInstance.instance;
    }
}

export default APIAxiosInstance.getInstance();
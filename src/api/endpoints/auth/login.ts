import APIAxiosInstance from '@/api/axios';

export const login = async (userId: string, password: string) => {
    const response = await APIAxiosInstance.post('/auth/login', {
        userId,
        password,
    });
    return response.data;
};

import APIAxiosInstance from '@/api/axios';

export const sendVelogAuthEmail = async (email: string) => {
    const response = await APIAxiosInstance.post('/auth/link-velog-1', {
        email,
    });
    return response.data;
};

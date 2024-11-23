import APIAxiosInstance from '@/api/axios';

export const getMemberInfo = async () => {
    const accessToken = localStorage.getItem('accessToken');
    
    const response = await APIAxiosInstance.get('/auth/member', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response.data;
};

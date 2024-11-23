import APIAxiosInstance from '@/api/axios';

export const sendVelogAuthLink = async (authLink: string) => {
    const accessToken = localStorage.getItem('accessToken');
    
    const response = await APIAxiosInstance.post('/auth/link-velog-2', 
        {
            authUrl: authLink,
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );
    return response.data;
};

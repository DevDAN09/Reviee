import APIAxiosInstance from '@/api/axios';

export const velogPost = async (title: string, body: string) => {
    const accessToken = localStorage.getItem('accessToken');
    
    const response = await APIAxiosInstance.post('/blog/velog-post', 
        {
            title: title,
            body: body,
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        }
    );
    return response.data;
};

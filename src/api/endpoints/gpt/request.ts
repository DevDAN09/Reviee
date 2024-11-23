import APIAxiosInstance from '@/api/axios';

export const gptRequest = async (title: string, content: string, code: string) => {
    const accessToken = localStorage.getItem('accessToken');
    
    const response = await APIAxiosInstance.post('/gpt/request', 
        {
            title: title,
            contents: content,
            code: code,
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            timeout: 30000
        }
    );
    return response.data;
};

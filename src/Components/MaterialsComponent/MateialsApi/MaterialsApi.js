import axios from "axios";

axios.defaults.baseURL = "https://64aaa6220c6d844abedea784.mockapi.io";

export const addMaterial = async (values) => {
    const response = await axios.post('/materials', values);
    return response.data;
    
} 
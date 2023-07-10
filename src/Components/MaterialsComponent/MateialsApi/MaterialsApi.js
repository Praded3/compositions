import axios from "axios";

 axios.defaults.baseURL = "https://64aaa6220c6d844abedea784.mockapi.io";

// axios.defaults.baseURL = 'http://127.0.0.1:8000/';

// const getPoint = 'users/';
// const addPoint = 'users/register';

export const addMaterial = async (values) => {
    const response = await axios.post('/materials', values);
    return response.data;
    
} 

export const getAllMaterials = async () => {
    const response = await axios.get('/materials');
    return response.data;
}

export const deleteMaterial = async (id) => {
    const response = await axios.delete(`/materials/${id}`);
    return response.data;
};

export const updateMaterial = async (fields) => {
    const response = await axios.put(`/materials/${fields.id}`, fields);
    return response.data;
}
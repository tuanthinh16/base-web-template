import axios from 'axios';
import { BaseUrl } from '../Config/config.base';

// Base URL for API requests
const API_BASE_URL = BaseUrl;

// Function to handle common Axios errors
const handleAxiosError = (error: any) => {
    console.log('Axios Error:', error);
    throw error; // Optionally handle or rethrow the error as needed
};

// GET request
export const getRequest = (object: string, key: string, value: string) => {
    try {
        return axios.get(`${API_BASE_URL}/${object}`, {
            params: {
                [key]: value
            }
        });
    } catch (error) {
        handleAxiosError(error);
    }
};

// POST request
export const postRequest = (object: string, data: any) => {
    try {
        return axios.post(`${API_BASE_URL}/${object}`, data);
    } catch (error) {
        handleAxiosError(error);
    }
};

// PUT request
export const putRequest = (object: string, id: string, data: any) => {
    try {
        return axios.put(`${API_BASE_URL}/${object}/${id}`, data);
    } catch (error) {
        handleAxiosError(error);
    }
};

// DELETE request
export const deleteRequest = (object: string, id: string) => {
    try {
        return axios.delete(`${API_BASE_URL}/${object}/${id}`);
    } catch (error) {
        handleAxiosError(error);
    }
};

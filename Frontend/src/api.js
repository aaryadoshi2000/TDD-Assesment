// api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your server URL

export const calculateSum = async (numbers) => {
  try {
    const response = await axios.post(`${BASE_URL}/calculate`, { numbers });
    return response.data.result;
  } catch (error) {
    throw new Error(error.response.data.error || 'Something went wrong');
  }
};

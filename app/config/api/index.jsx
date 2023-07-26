import axios from "axios";

export const axiosGet = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error data:", error);
    return null;
  }
};

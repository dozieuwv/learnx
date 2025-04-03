import axios from "axios";

const API_BASE_URL = "https://learnx-official-api.onrender.com/api/v1"; // Set your API base URL

const apiRequest = async (endpoint, method = "GET", data = null, token = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // Add Authorization header if token is present
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios({
      url: `${API_BASE_URL}/${endpoint}`,
      method,
      data,
      headers,
    });

    return response.data; // Return response data if successful
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

export default apiRequest;

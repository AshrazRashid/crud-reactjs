import axios from "axios";

// api.js
const apiUrl = "http://localhost:3001/api/Blog/";

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export async function fetchData() {
  const response = await axiosInstance.get(`${apiUrl}`);
  return await response.data.data;
}

export async function updateData(id, data) {
  console.log("Updating data", id, data);
  const response = await axiosInstance.put(`${apiUrl}${id}`, {
    title: data.title,
    content: data.content,
  });

  return await response.data.data;
}

export async function deleteData(id) {
  await axiosInstance.delete(`${apiUrl}${id}`);
}

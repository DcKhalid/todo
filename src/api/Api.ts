import axios from "axios";

const URL: string = "http://localhost:3000/api/v1";
export const createTask = (data: any) => {
  try {
    return axios.post(`${URL}/create-task`, data);
  } catch (error) {}
};
export const UpdateTask = (id: any) => {
  try {
    return axios.patch(`${URL}/update-task/${id}`);
  } catch (error) {}
};
export const getTask = () => {
  try {
    return axios.get(`${URL}/get-task`).then((res) => {
      return res.data.data;
    });
  } catch (error) {}
};

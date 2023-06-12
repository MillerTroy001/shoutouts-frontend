import axios from "axios";
import Shoutout from "../models/Shoutout";

const baseURL = process.env.REACT_APP_FUNCTIONS_BASE_URL || "";

export const getAllShoutouts = async (): Promise<Shoutout[]> => {
  return (await axios.get(`${baseURL}/shoutouts`)).data;
};

export const getUserShoutout = async (name: string): Promise<Shoutout[]> => {
  return (await axios.get(`${baseURL}/user/${encodeURIComponent(name)}`)).data;
};

export const addAShoutout = async (
  newShoutout: Shoutout
): Promise<Shoutout> => {
  return (await axios.post(`${baseURL}/shoutouts`, newShoutout)).data;
};

export const deleteOneShoutout = (id: string): Promise<void | string> => {
  return axios.delete(`${baseURL}/shoutouts/${id}`).then((res) => {
    console.log(res);
    return res.data;
  });
};

export const getMyShoutouts = (name: string): Promise<Shoutout[]> => {
  return axios.get(`${baseURL}/me/${name}`).then((res) => res.data);
};

import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: "http://127.0.0.1:8080/",
});

export const login = async (data, onLoad) => {
  try {
    const res = await api.post("/login", data);
    onLoad(res.data);
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message);
  }
};

export const signup = async (data, onLoad) => {
  try {
    const res = await api.post("/signup", data);
    onLoad(res.data);
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.message);
  }
};

import axios from "axios";

const api = "https://jsonplaceholder.typicode.com/comments";
const apiPhoto = "https://jsonplaceholder.typicode.com/photos";
// get all comments
const getAll = async (cb) => {
  const res = await axios.get(api);
  return cb(res.data);
};
const getPhoto = async (cb) => {
  const res = await axios.get(apiPhoto);
  return cb(res.data);
};
const getPhotos = async () => {
  const res = await axios.get(api);
  return res.data;
};
const getCmtByID = async ({ pageParam = 1 }) => {
  const res = await axios.get(`${api}/${pageParam}`);
  return res.data;
};
const getOne= async (id) => {
    const res = await axios.get(`${api}/${id}`);
    return res.data;
  };
export { getAll, getPhoto, getPhotos, getCmtByID,getOne };

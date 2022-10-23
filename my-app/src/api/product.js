import axios from "axios";

const instance = axios.create({
       baseURL: "https://634ec5654af5fdff3a66b55f.mockapi.io/"
});

export const getOne = (id) => {
       return instance.get("/products/" + id);
}
export const getAllProduct = () => {
       return instance.get("/products");
}
export const addProduct = (data) => {
       return instance.post("/products",data);
}
export const updateProduct = (data) => {
       return instance.put("/products/" + data.id, data);
}
export const removeProduct = (id) => {
       return instance.delete("/products/" + id);
}
import axios from "axios";

const API = axios.create({baseURL: 'https://moviegramzw16.herokuapp.com/'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

// const url = "https://moviegramzw16.herokuapp.com/posts";



export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const dislikePost = (id) => API.patch(`/posts/${id}/dislikePost`);
export const watchPost = (id) => API.patch(`/posts/${id}/watchPost`);
export const bookMarkPost = (id) => API.patch(`/posts/${id}/bookMarkPost`);

export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);
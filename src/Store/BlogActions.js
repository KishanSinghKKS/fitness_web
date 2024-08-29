import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getBlogs = createAsyncThunk("get/getBlogs", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get('http://localhost:4000/api/getBlogs');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const getBlog = createAsyncThunk("get/getBlog", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.post(`http://localhost:4000/api/getBlog/${data.itemId}`,data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const addBlog = createAsyncThunk("post/addBlog", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"application/json"},withCredentials:true};
        const response = await axios.post('http://localhost:4000/api/addBlog',data,config);
        return response.data;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});

const updateBlog = createAsyncThunk("update/updateBlog", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{'Content-Type': 'application/json'},withCredentials:true};
        const response = await axios.put(`http://localhost:4000/api/updateBlog/${data.itemId}`,data,config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});


const deleteBlog = createAsyncThunk("delete/deleteBlog", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.post(`http://localhost:4000/api/deleteBlog/${data.itemId}`,data,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export {getBlogs, getBlog, addBlog, updateBlog,deleteBlog};
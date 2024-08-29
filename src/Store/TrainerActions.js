import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getTrainers = createAsyncThunk("get/getTrainers", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get('http://localhost:4000/api/getTrainers',{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const getTrainer = createAsyncThunk("get/getTrainer", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/getTrainer/${id}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const addTrainer = createAsyncThunk("post/addTrainer", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"application/json"},withCredentials:true};
        const response = await axios.post('http://localhost:4000/api/addTrainer',data,config);
        return response.data;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});

const updateTrainer = createAsyncThunk("update/updateTrainer", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{'Content-Type': 'application/json'},withCredentials:true};
        const response = await axios.put(`http://localhost:4000/api/updateTrainer/${data.id}`,data.form,config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const assignTrainer = createAsyncThunk("post/assignTrainer", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"application/json"}};
        const response = await axios.post('http://localhost:4000/api/assignTrainer',data,config);
        return response.data;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});


const deleteTrainer = createAsyncThunk("delete/deleteTrainer", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.delete(`http://localhost:4000/api/deleteTrainer/${id}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export {getTrainers, getTrainer, addTrainer, updateTrainer, assignTrainer,deleteTrainer};
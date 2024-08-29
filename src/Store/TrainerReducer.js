import { createSlice } from "@reduxjs/toolkit";
import {getTrainers, getTrainer, addTrainer, updateTrainer, assignTrainer, deleteTrainer} from "./TrainerActions";

const trainerSlice = createSlice({
    name: 'Trainer',
    initialState: { loading: false, error: false, success: false, trainers:[],trainer:{}, deleteSuccess: false, addSuccess: false, updateSuccess: false},
    reducers: {
        clearError(state, action) {
            state.error = false;
        },
        clearSuccess: (state, action) => {
            state.success = false;
        },
        clearDeleteSuccess: (state, action)=>{
            state.deleteSuccess= false;
        },
        clearAddSuccess: (state, action)=>{
            state.addSuccess= false;
        },
        clearUpdateSuccess: (state, action)=>{
            state.updateSuccess = false
        }

    },
    extraReducers: (builder) => {
        // getTrainerList
        builder
            .addCase(getTrainers.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getTrainers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
                state.trainers = action.payload.trainers
            })
            .addCase(getTrainers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // getTrainer
        builder
            .addCase(getTrainer.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getTrainer.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
                state.trainer = action.payload.trainer
            })
            .addCase(getTrainer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // addTrainer
        builder
            .addCase(addTrainer.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addTrainer.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.addSuccess = true;
            })
            .addCase(addTrainer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //assignTrainer
        builder
            .addCase(deleteTrainer.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteTrainer.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.deleteSuccess = true;
            })
            .addCase(deleteTrainer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //updateTrainer
        builder
            .addCase(updateTrainer.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updateTrainer.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.updateSuccess = true;
            })
            .addCase(updateTrainer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //assignTrainer
        builder
            .addCase(assignTrainer.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(assignTrainer.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
                state.trainer = action.payload.trainer;
            })
            .addCase(assignTrainer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});


const trainerAction = trainerSlice.actions;

export {
    trainerAction,
    trainerSlice,
};
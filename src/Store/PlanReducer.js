import { createSlice } from "@reduxjs/toolkit";
import {getPlans, getPlan, addPlan, updatePlan, deletePlan} from "./PlanActions";

const PlanSlice = createSlice({
    name: 'Plan',
    initialState: { loading: false, error: false, success: false, Plans:[],Plan:{}, deleteSuccess: false, addSuccess: false, updateSuccess: false},
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
        // getPlanList
        builder
            .addCase(getPlans.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPlans.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
                state.Plans = action.payload.Plans
            })
            .addCase(getPlans.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // getPlan
        builder
            .addCase(getPlan.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPlan.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
                state.Plan = action.payload.currentPlan
            })
            .addCase(getPlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // addPlan
        builder
            .addCase(addPlan.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addPlan.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.addSuccess = true;
            })
            .addCase(addPlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //assignPlan
        builder
            .addCase(deletePlan.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deletePlan.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.deleteSuccess = true;
            })
            .addCase(deletePlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //updatePlan
        builder
            .addCase(updatePlan.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updatePlan.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.updateSuccess = true;
            })
            .addCase(updatePlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});


const PlanAction = PlanSlice.actions;

export {
    PlanAction,
    PlanSlice,
};
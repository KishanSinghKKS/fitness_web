import { createSlice } from "@reduxjs/toolkit";
import { submitConsultancyForm, getConsultancyForms, getConsultancyForm, updateConsultancy } from "./ConsultancyActions";

const createConsultancySlice = createSlice({
    name: 'Consultancy',
    initialState: { loading: false, error: false, success: false },
    reducers: {
        clearError(state, action) {
            state.error = false;
        },
        clearSuccess: (state, action) => {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        // submitConsultancy
        builder
            .addCase(submitConsultancyForm.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(submitConsultancyForm.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
            })
            .addCase(submitConsultancyForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

// admin Slice
const adminConsultancySlice = createSlice({
    name: 'adminConsultancy',
    initialState: { loading: false, error: false, success: false, forms: [], isUpdated: false, form:{}, updateSuccess:false },
    reducers: {
        clearError(state, action) {
            state.error = false;
        },
        clearSuccess: (state, action) => {
            state.success = false;
        },
        clearUpdate: (state, action) => {
            state.isUpdated = false;
        },
        clearUpdateSuccess: (state, action) => {
            state.updateSuccess = false;
        }
    },
    extraReducers: (builder) => {
        // get all Consultancy Forms
        builder
            .addCase(getConsultancyForms.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getConsultancyForms.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.forms = action.payload.forms;
                state.success = true;
            })
            .addCase(getConsultancyForms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // get particular Consultancy Form
        builder
            .addCase(getConsultancyForm.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getConsultancyForm.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.form = action.payload.form;
                state.success = true;
            })
            .addCase(getConsultancyForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // update Consultancy Form
        builder
            .addCase(updateConsultancy.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updateConsultancy.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.updateSuccess = true;
            })
            .addCase(updateConsultancy.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

const createConsultancyAction = createConsultancySlice.actions;
const adminConsultancyAction = adminConsultancySlice.actions;

export {
    createConsultancyAction,
    adminConsultancyAction,
    createConsultancySlice,
    adminConsultancySlice
};

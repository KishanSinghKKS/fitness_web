import { createSlice } from "@reduxjs/toolkit";
import { getOTP, otpVerification, loadUser, logOutUser } from "./UserAction";

// State for user
const userSlice = createSlice({
    name: 'UserLogIn',
    initialState: { user: {}, loading: false, error: false,loadUserError: false, isAuthenticated: false, otpSend: false },
    reducers: {
        clearError(state, action) {
            state.error = false;
        },
        clearOtpSend(state, action) {
            state.otpSend = false;
        },
        clearLoadUserError(state, action) {
            state.loadUserError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // getOTP
            .addCase(getOTP.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getOTP.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.otpSend = true;
            })
            .addCase(getOTP.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // otpVerification
            .addCase(otpVerification.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(otpVerification.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase(otpVerification.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // loadUser
            .addCase(loadUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.loading = false;
                state.loadUserError = false;
                state.isAuthenticated = true;
                
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.loading = false;
                state.loadUserError = action.payload;
            })
            // logOut
            .addCase(logOutUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(logOutUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.isAuthenticated = false;
                state.user = {};
            })
            .addCase(logOutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

const userActions = userSlice.actions;
export { userSlice, userActions };

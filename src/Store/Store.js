import {configureStore} from '@reduxjs/toolkit';
import {createConsultancySlice, adminConsultancySlice} from './ConsultancyReducer';
import {trainerSlice} from './TrainerReducer';
import { PlanSlice } from './PlanReducer';
import { userSlice } from './UserReducer';
import { BlogSlice } from './BlogReducer';

const store = configureStore({
    reducer:{
        createConsultancy: createConsultancySlice.reducer,
        adminConsultancy: adminConsultancySlice.reducer,
        trainer: trainerSlice.reducer ,
        user: userSlice.reducer,
        plan: PlanSlice.reducer,
        blog: BlogSlice.reducer
    }
});
export default store;
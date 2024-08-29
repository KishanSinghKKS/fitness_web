import { createSlice } from "@reduxjs/toolkit";
import {getBlogs, getBlog, addBlog, updateBlog, deleteBlog} from "./BlogActions";

const BlogSlice = createSlice({
    name: 'Blog',
    initialState: { loading: false, error: false, success: false, Blogs:[],Blog:{}, deleteSuccess: false, addSuccess: false, updateSuccess: false},
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
        // getBlogList
        builder
            .addCase(getBlogs.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
                state.Blogs = action.payload.blogs
            })
            .addCase(getBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // getBlog
        builder
            .addCase(getBlog.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.success = true;
                state.Blog = action.payload.foundItem
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        // addBlog
        builder
            .addCase(addBlog.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.addSuccess = true;
            })
            .addCase(addBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //assignBlog
        builder
            .addCase(deleteBlog.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.deleteSuccess = true;
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //updateBlog
        builder
            .addCase(updateBlog.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updateBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                state.updateSuccess = true;
            })
            .addCase(updateBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});


const BlogAction = BlogSlice.actions;

export {
    BlogAction,
    BlogSlice,
};
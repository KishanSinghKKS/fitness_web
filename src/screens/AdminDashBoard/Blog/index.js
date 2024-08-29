import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux'
import { getBlogs,deleteBlog } from '../../../Store/BlogActions'
import styles from './Blog.module.sass'
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Info from './Info';
import BlogForm from './BlogForm';
import cn from 'classnames';
import { Delete } from '@material-ui/icons'
import { BlogAction } from '../../../Store/BlogReducer';
import { useAlert } from 'react-alert'

const Blog = () => {
  const [currentID, setCurrentID] = useState(null);
  const dispatch = useDispatch();
  const { Blogs,deleteSuccess, error, addSuccess, updateSuccess } = useSelector((state) => state.blog);
  const [form, setForm] = useState(0);
  const alert = useAlert();

  useEffect(() => {
    if(error){
      console.log(error);
      alert.error(error);
      dispatch(BlogAction.clearError());
    }

    if (deleteSuccess) {
      dispatch(BlogAction.clearDeleteSuccess());
      alert.success('Blog has been deleted');
    }


    dispatch(getBlogs("hello"));
  }, [dispatch,form,deleteSuccess, addSuccess,error, updateSuccess]);

  //for deleting 
  const deletefunc = (data) => {
    dispatch(deleteBlog(data));
  }

  const columns = [
    {
      field: "title",
      headerName: "Title",
      minWidth: 100,
      flex: 0.2
    },
    {
      field: "type",
      headerName: "Type",
      minWidth: 100,
      flex: 0.2
    },
    {
      field: "info",
      headerName: "Info",
      minWidth: 100,
      flex: 0.2
    },
    {
      field: 'action',
      headerName: 'Action',
      minWidth: 100,
      flex: 0.2,
      sortable: false,
      renderCell: (params) => {
        return (<>
          <Link onClick={() => { setCurrentID({title:params.row.type,itemId:params.row.id}) } }>
            <OpenInNewIcon style={{ color: 'black' }}></OpenInNewIcon>
          </Link>
          <Link onClick={() => { deletefunc({title:params.row.type,itemId:params.row.id}) }} style={{marginLeft:"10px"}} >
            <Delete style={{ color: 'black' }}></Delete>
          </Link>
        </>
        );
      }
    },
  ];



  const rows = [];
  Blogs && Blogs.forEach(element => {
    element.items.forEach(data=>{
      rows.unshift({
        id: data._id,
        title: data.title,
        type: element.title,
        info: data.info
      });
    })
  });


  return (
    <div className={styles.section}>
      {currentID !==null && <Info setCurrentID={setCurrentID} currentID={currentID}></Info>}
      {form !== 0 && <BlogForm setForm={setForm}></BlogForm>}
      <div className={styles.heading}>
        <div>Blog</div>
        <div
          className={cn("button", styles.button)}
          onClick={()=>{setForm(1)}}
        >
          Add Blog
        </div>
      </div>
      <div className={styles.dataGrid}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </div>
    </div>
  )
}

export default Blog
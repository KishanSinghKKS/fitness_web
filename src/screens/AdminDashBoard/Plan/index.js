import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux'
import { getPlans,deletePlan } from '../../../Store/PlanActions'
import styles from './Plan.module.sass'
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Info from './Info';
import PlanForm from './PlanForm';
import cn from 'classnames';
import { Delete } from '@material-ui/icons'
import { PlanAction } from '../../../Store/PlanReducer';
import { useAlert } from 'react-alert'

const Plan = () => {
  const [currentID, setCurrentID] = useState(null);
  const dispatch = useDispatch();
  const { Plans,deleteSuccess, error, addSuccess, updateSuccess } = useSelector((state) => state.plan);
  const [form, setForm] = useState(0);
  const alert = useAlert();

  useEffect(() => {
    if(error){
      console.log(error);
      alert.error(error);
      dispatch(PlanAction.clearError());
    }

    if (deleteSuccess) {
      dispatch(PlanAction.clearDeleteSuccess());
      alert.success('Plan has been deleted');
    }


    dispatch(getPlans("hello"));
  }, [dispatch,form,deleteSuccess, addSuccess,error, updateSuccess]);

  //for deleting 
  const deletefunc = (id) => {
    dispatch(deletePlan(id));
  }

  const columns = [
    {
      field: "title",
      headerName: "Title",
      minWidth: 100,
      flex: 0.2
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 100,
      flex: 0.2
    },
    {
      field: "price",
      headerName: "Price",
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
          <Link onClick={() => { setCurrentID(params.row.id) } }>
            <OpenInNewIcon style={{ color: 'black' }}></OpenInNewIcon>
          </Link>
          <Link onClick={() => { deletefunc(params.row.id) }} style={{marginLeft:"10px"}} >
            <Delete style={{ color: 'black' }}></Delete>
          </Link>
        </>
        );
      }
    },
  ];



  const rows = [];
  Plans && Plans.forEach(element => {
    rows.unshift({
      id: element._id,
      title: element.title,
      description: element.description,
      price: element.price
    });

  });


  return (
    <div className={styles.section}>
      {currentID !==null && <Info setCurrentID={setCurrentID} currentID={currentID}></Info>}
      {form !== 0 && <PlanForm setForm={setForm}></PlanForm>}
      <div className={styles.heading}>
        <div>Plan</div>
        <div
          className={cn("button", styles.button)}
          onClick={()=>{setForm(1)}}
        >
          Add Plan
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

export default Plan
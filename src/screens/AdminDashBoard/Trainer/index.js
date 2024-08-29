import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux'
import { getTrainers,deleteTrainer } from '../../../Store/TrainerActions'
import styles from './Trainer.module.sass'
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Info from './Info';
import TrainerForm from './TrainerForm';
import cn from 'classnames';
import { Delete } from '@material-ui/icons'
import { trainerAction } from '../../../Store/TrainerReducer';
import { useAlert } from 'react-alert'

const Trainer = () => {
  const [currentID, setCurrentID] = useState(null);
  const dispatch = useDispatch();
  const { trainers,deleteSuccess, error, addSuccess, updateSuccess } = useSelector((state) => state.trainer);
  const [form, setForm] = useState(0);
  const alert = useAlert();

  useEffect(() => {
    if(error){
      console.log(error);
      alert.error(error);
      dispatch(trainerAction.clearError());
    }

    if (deleteSuccess) {
      dispatch(trainerAction.clearDeleteSuccess());
      alert.success('Trainer has been deleted');
    }


    dispatch(getTrainers("hello"));
  }, [dispatch,deleteSuccess, addSuccess,error, updateSuccess]);

  //for deleting 
  const deletefunc = (id) => {
    dispatch(deleteTrainer(id));
  }

  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 0.2
    },
    {
      field: "contactNumber",
      headerName: "Contact",
      minWidth: 100,
      flex: 0.2
    },
    {
      field: "gender",
      headerName: "Gender",
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
  trainers && trainers.forEach(element => {
    rows.unshift({
      id: element._id,
      name: element.name,
      contactNumber: element.contactNumber,
      experience: element.experience,
      gender: element.gender,
      specialties: element.specialties,
      client: element.clients
    });

  });


  return (
    <div className={styles.section}>
      {currentID !==null && <Info setCurrentID={setCurrentID} currentID={currentID}></Info>}
      {form !== 0 && <TrainerForm setForm={setForm}></TrainerForm>}
      <div className={styles.heading}>
        <div>Trainer</div>
        <div
          className={cn("button", styles.button)}
          onClick={()=>{setForm(1)}}
        >
          Add Trainer
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

export default Trainer
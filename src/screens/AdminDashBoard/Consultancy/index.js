import React,{useEffect,useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux'
import { getConsultancyForms } from '../../../Store/ConsultancyActions'
import styles from './Consultancy.module.sass'
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Info from './Info';

const Consultancy = () => {
    const [currentID, setCurrentID] = useState(null);
    const dispatch = useDispatch();
    const { forms} = useSelector((state) => state.adminConsultancy);
    const [type, setType] = useState('new');

    useEffect(() => {
        dispatch(getConsultancyForms("hello"));
    }, [dispatch,type]);


    const columns = [
        {
            field: "email",
            headerName: "Email",
            minWidth: 100,
            flex: 0.3,
        },
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
            field: "visibility",
            headerName: "Visibility",
            minWidth: 100,
            flex: 0.2 
        },
        {
            field: 'view',
            headerName: 'View',
            minWidth: 100,
            flex: 0.2,
            sortable: false,
            renderCell: (params) => {
                return (<>
                    <Link onClick={()=>{setCurrentID(params.row.id)}}>
                        <OpenInNewIcon></OpenInNewIcon>
                    </Link>
                </>
                );
            }
        },
    ];
   
    

    const rows = [];
    forms && forms.forEach(element => {
        rows.unshift({
            id: element._id,
            email: element.email,
            name: element.name,
            contactNumber: element.contactNumber,
            gender: element.gender,
            visibility: element.isNew?'new':'old'
        });

    });


  return (
    <div className={styles.section}>
        {currentID!=null&&<Info setCurrentID={setCurrentID} currentID={currentID} type={type} setType={setType}></Info>}
        <div className={styles.heading}>Consultancy</div>
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

export default Consultancy
import React,{useState} from 'react'
import styles from "./AdminDashBoard.module.sass"
import Sidebar from './Sidebar'
import Client from './Client'
import Trainer from './Trainer'
import Consultancy from './Consultancy'
import Plan from './Plan'
import Blog from './Blog'

const AdminDashboard = () => {
  const [currentState, setCurrentState] = useState('DashBoard');
  return (
    <div className={styles.section}>
      <Sidebar currentState={currentState} setCurrentState={setCurrentState}></Sidebar>
      {
        (currentState==='DashBoard'&&<div>DashBoard</div>)||
        (currentState==='Trainer'&&<Trainer></Trainer>)||
        (currentState==='Client'&&<Client></Client>)||
        (currentState==='Consultancy'&&<Consultancy></Consultancy>)||
        (currentState==='Plans'&&<Plan></Plan>)||
        (currentState==='Blog'&&<Blog></Blog>)
      }
    </div>
  )
}

export default AdminDashboard
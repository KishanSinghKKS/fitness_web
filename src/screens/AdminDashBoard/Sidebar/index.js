import React from 'react'
import styles from "./Sidebar.module.sass";
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { logOutUser } from '../../../Store/UserAction';
import { useDispatch } from 'react-redux';
import {CurrencyRupee, Dashboard, Person, SportsGymnastics, Contacts, Logout, Book} from '@mui/icons-material';


const navLinks = [
    {
        title: "DashBoard",
        url: "/adminDashBoard",
        icon: <Dashboard/>,
        size: 20
    },
    {
        title: "Client",
        url: "/admin/client",
        icon: <Person/>,
        size: 20
    },
    {
        title: "Trainer",
        url: "/admin/trainer",
        icon: <SportsGymnastics/>,
        size: 20
    },
    {
        title: "Consultancy",
        url: "/admin/consultancy",
        icon: <Contacts/>,
        size: 20
    },
    {
        title: "Plans",
        url: "/admin/plan",
        icon: <CurrencyRupee/>,
        size: 20
    },
    {
        title: "Blog",
        url: "/admin/blog",
        icon: <Book/>,
        size: 20
    },
    {
        title: "LogOut",
        url: "/admin/logout",
        icon: <Logout/>,
        size: 20
    },
];


const Sidebar = ({ currentState, setCurrentState }) => {
    const dispatch=useDispatch();

    const handleLogOut = ()=>{
        dispatch(logOutUser("hello"));
        alert.success("Log Out Successfully");
    }

    return (
        <div className={styles.section}>
            <div>
                {
                    navLinks.map((x, ind) => {
                        return <Link key={ind} className={cn(styles.link, {
                            [styles.active]:  currentState=== x.title,
                        })} onClick={() => { x.title==='LogOut'?handleLogOut():setCurrentState(x.title) }}>
                            {x.icon}
                            <div>{x.title}</div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar
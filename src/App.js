import React,{useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Features from "./screens/Features";
import Pricing from "./screens/Pricing";
import Lifestyle from "./screens/Lifestyle";
import Article from "./screens/Article";
import AdminDashboard from "./screens/AdminDashBoard";
import Login from "./screens/Login";
import {useDispatch} from 'react-redux'
import { loadUser } from "./Store/UserAction";
import ProtectedRouter from "./components/ProtectedRouter";

function App() {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(loadUser("hello"));
    },[dispatch]); 

    return (
        <Routes>
            <Route path="/">
                <Route
                    index
                    element={
                        <Page>
                            <Home />
                        </Page>
                    }
                />
                <Route
                    path="services"
                    element={
                        <Page>
                            <Pricing />
                        </Page>
                    }
                />
                <Route
                    path="blogs"
                    element={
                        <Page>
                            <Lifestyle />
                        </Page>
                    }
                />
                <Route
                    path="article"
                    element={
                        <Page>
                            <Article />
                        </Page>
                    }
                />
                 <Route
                    path="adminDashBoard"
                    element={
                        <Page>
                           <ProtectedRouter><AdminDashboard></AdminDashboard></ProtectedRouter>
                        </Page>
                    }
                />
                <Route
                    path="admin/login"
                    element={
                        <Page>
                            <Login/>
                        </Page>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;

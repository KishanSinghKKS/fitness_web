import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import Store from '../src/Store/Store'
import App from "./App";
import {positions,transitions,Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const options={
   timeout:5000,
   position:positions.BOTTOM_CENTER,
   transition:transitions.SCALE
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={Store}>
            <AlertProvider template={AlertTemplate} {...options}><App /></AlertProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

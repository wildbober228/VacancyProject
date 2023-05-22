import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {MantineProvider} from "@mantine/core";
import Provider from "react-redux/es/components/Provider";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MantineProvider>
    </Provider>
);


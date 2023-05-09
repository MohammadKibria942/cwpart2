import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import EnterPatientDetails from './EnterPatientDetails';
import ViewPatientRecords from './Pages/ViewPatientRecords';
import UpdatePatientRecords from './Pages/UpdatePatientRecords';
import SuccessPage from './Pages/SuccessPage';
import ErrorPage from './Pages/ErrorPage';

import UpdateForename from './Pages/UpdatePatientDetails/UpdateForename';
import UpdateSurname from './Pages/UpdatePatientDetails/UpdateSurname';
import UpdateDOB from './Pages/UpdatePatientDetails/UpdateDOB';
import UpdateGenderCode from './Pages/UpdatePatientDetails/UpdateGenderCode';
import UpdatePostcode from './Pages/UpdatePatientDetails/UpdatePostcode';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
    {
        path: "/",
        element: <EnterPatientDetails />,
    },
    {
        path: "UpdatePatientRecords",
        element: <UpdatePatientRecords />,
    },
    {
        path: "UpdateForename",
        element: <UpdateForename />,
    },
    {
        path: "UpdateSurname",
        element: <UpdateSurname />,
    },
    {
        path: "UpdateDOB",
        element: <UpdateDOB />,
    },
    {
        path: "UpdateGenderCode",
        element: <UpdateGenderCode />,
    },
    {
        path: "UpdatePostcode",
        element: <UpdatePostcode />,
    },
    {
        path: "ViewPatientRecords",
        element: <ViewPatientRecords />,
    },
    {
        path: "SuccessPage",
        element: <SuccessPage />,
    },
    {
        path: "ErrorPage",
        element: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
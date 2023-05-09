import './PatientRecords.css';
import React from 'react';
import MyHeader from './Components/MyHeader.js';//Import Header component
import MyInput from './Components/MyInput.js';//Import Input component
import MyFooter from './Components/MyFooter.js';//import Footer component
import BackLink from '@govuk-react/back-link';//import backlink to take back to previous page


import { createContext } from 'react';
export const CurrentContext = createContext(null);

function EnterPatientDetails() {

    return (
        <>
            <div class="div2">{/*create a div to show all the components*/}
                <MyHeader />
                <BackLink href="/">Back</BackLink>{/*Takes you back to main menu change this*/}

                <MyInput />
                <br />
                <br />

                <MyFooter />
            </div>
        </>
    )
}
export default EnterPatientDetails;
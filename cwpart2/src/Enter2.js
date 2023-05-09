import './EnterStyle2.css';
import Heading from '@govuk-react/heading';
import InputField from '@govuk-react/input-field';
import TopNav from '@govuk-react/top-nav';
import BackLink from '@govuk-react/back-link';
import Button from '@govuk-react/button';
import Footer from '@govuk-react/footer';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fieldset, Input, LabelText } from '../node_modules/govuk-react/dist/govuk-react.cjs';
import { Navigate, useNavigate } from '../node_modules/react-router-dom/dist/index';
import jq from 'jquery';
import { createContext } from 'react';
export const CurrentContext = createContext(null);




function Enter2() {

    const [nextPage, setNextPage] = useState("/ErrorPage");
    const [inputComplete, setInputComplete] = useState(false);

    function nhsNumberCapture(e) {
        CurrentContext.nhsNumberInput = e.target.value;
    }

    function FindRecords() {
        var patientData = {
            "NhsNo": CurrentContext.nhsNumberInput
        }
        var url_recordfinder = 'http://localhost:4000/RecordFinder.php';

        jq.ajax({
            type: "POST",
            url: url_recordfinder,
            mode: "no-core",
            data: patientData,

            success(data) {
                localStorage.setItem("returnData", data);
                console.log(data);
                if (data == 0) {
                    setNextPage("/ErrorPage");
                } else {
                    var json = jq.parseJSON(data)

                    CurrentContext.Forename = json[0].Forename;
                    CurrentContext.Surname = json[0].Surname;
                    CurrentContext.PersonDOB = json[0].PersonDOB;

                    if (json[0].GenderCode == 1) {
                        CurrentContext.GenderCode = "Male";
                    } else {
                        CurrentContext.GenderCode = "Female";
                    }

                    CurrentContext.Postcode = json[0].Postcode;
                    console.log(CurrentContext.Forename);
                    console.log(CurrentContext.Surname);
                    console.log(CurrentContext.PersonDOB);
                    console.log(CurrentContext.GenderCode);
                    console.log(CurrentContext.Postcode);

                    setNextPage("/ViewPatientRecords");
                }
            }
        });
    }



    return (


        <div>

            <TopNav serviceTitle="View Patient Records" />
            <div className="backlink-container">
                <BackLink />
            </div>
            <br></br>

            <div2><h3>Please enter your details below</h3></div2>

            <fieldset>

                <InputField>First Name </InputField>

                <InputField>Surname </InputField>

                <InputField onInput={nhsNumberCapture}> NHSNumber </InputField>


                <br></br>
                <Button onClick={FindRecords}> Confirm &gt; </Button>
            </fieldset>
            <Footer />



        </div>


    );


}
export default Enter2;

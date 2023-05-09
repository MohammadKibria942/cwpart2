import { Input, LabelText } from 'govuk-react';
import { CurrentContext } from "../EnterPatientDetails";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from '@govuk-react/button';
import jq from 'jquery';

function MyInput() {

    const [nextPage, setNextPage] = useState("/ErrorPage");
    const [inputComplete, setInputComplete] = useState(false);

    function firstNameCapture(e) {
        CurrentContext.firstName = e.target.value;
        setInputComplete(e.target.value && CurrentContext.surname && CurrentContext.nhsNumberInput);
    }

    function surNameCapture(e) {
        CurrentContext.surname = e.target.value;
        setInputComplete(CurrentContext.firstName && e.target.value && CurrentContext.nhsNumberInput);
    }

    function nhsNumberCapture(e) {
        CurrentContext.nhsNumberInput = e.target.value;
        localStorage.setItem("NHSNumber", CurrentContext.nhsNumberInput);
        setInputComplete(CurrentContext.firstName && CurrentContext.surname && e.target.value);
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
                    setNextPage("/ViewPatientRecords");
                }
            }
        });
    }

    return (
        <>
            <fieldset>
                <legend>
                    <h1> Enter Your Details </h1>
                </legend>

                <div class="div2">
                    <LabelText > First Name </LabelText>
                    <Input onChange={firstNameCapture} />
                </div>

                <div class="div2">
                    <LabelText > Surname </LabelText>
                    <Input onChange={surNameCapture} />
                </div>

                <div class="div2">
                    <LabelText > NHS Number </LabelText>
                    <Input onInput={nhsNumberCapture} onChange={FindRecords} />
                </div>
                <br />
                <br />

                <Link to={nextPage} ><Button class="enterDBtn" disabled={!inputComplete}>Submit</Button></Link>

            </fieldset>

        </>
    );

};
export default MyInput;
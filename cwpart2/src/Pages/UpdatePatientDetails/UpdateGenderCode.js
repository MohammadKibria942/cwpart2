import React, { useState } from 'react';
import MyFooter from '../../Components/MyFooter.js';
import MyHeader from '../../Components/MyHeader.js';

import { Input, LabelText } from 'govuk-react';
import { Button } from 'govuk-react';
import { CurrentContext } from "../../EnterPatientDetails";
import { Link } from "react-router-dom";


function UpdateGenderCode() {
    const [inputValue, setInputValue] = useState('');

    function newGenderCodeCapture(e) {
        setInputValue(e.target.value);
        CurrentContext.newGenderCode = (e.target.value === 'male') ? 1 : ((e.target.value === 'female') ? 2 : null);
        localStorage.setItem("GenderCodeKey", CurrentContext.newGenderCode);
        CurrentContext.dataChanged = true;
    }

    return (
        <>
            <MyHeader />
            <br />
            <fieldset>
                <div class="div2">
                    <h1>
                        <LabelText class="nhsuk-label"> Re-Enter Your Gender (Either 'male' or 'female')</LabelText>
                    </h1>
                    <Input class="govuk-input" onInput={newGenderCodeCapture} />
                    <br />
                    <br />
                    <Link to="/UpdatePatientRecords"><Button disabled={!inputValue}>Submit</Button></Link>
                    <br />
                </div>
            </fieldset>
            <MyFooter />
        </>
    );
}

export default UpdateGenderCode;

import MyHeader from '../../Components/MyHeader.js';
import MyFooter from '../../Components/MyFooter.js';

import { Input, LabelText } from 'govuk-react';////import Input and LabelText from govuk-react and govuk-frontend (install through npm)
import { Button } from 'govuk-react';
import { CurrentContext } from "../../EnterPatientDetails";

import { Link } from "react-router-dom";
import { useState } from "react";


function UpdatePostcode() {
    const [isInputEmpty, setIsInputEmpty] = useState(true);

    function newPostcodeCapture(e) {//function that checks to see if the input box is changed
        CurrentContext.newPostcode = e.target.value;//places what the user inputted into the current context carReg
        localStorage.setItem("PostcodeKey", CurrentContext.newPostcode);
        CurrentContext.dataChanged = true;
        setIsInputEmpty(false);
    }

    return (
        <>
            <MyHeader />
            <br />
            <br />
            <fieldset >
                <div class="div2">
                    <LabelText> Re-Enter your Postcode</LabelText>
                    <Input onInput={newPostcodeCapture} />
                    <br />
                    <br />
                    <Link to="/UpdatePatientRecords"><Button disabled={isInputEmpty}>Submit</Button></Link>
                </div>

            </fieldset>
            <MyFooter />
        </>
    )
};
export default UpdatePostcode;

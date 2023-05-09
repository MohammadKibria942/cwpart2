import MyHeader from '../../Components/MyHeader.js';
import MyFooter from '../../Components/MyFooter.js';

import { Input, LabelText } from 'govuk-react'; //import Input and LabelText from govuk-react and govuk-frontend (install through npm)
import { Button } from 'govuk-react';
import { CurrentContext } from "../../EnterPatientDetails";

import { Link } from "react-router-dom";
import { useState } from "react"; //import useState hook

function UpdateForename() {
    const [isInputFilled, setIsInputFilled] = useState(false); // state variable to track whether input field is filled or not

    function newForenameCapture(e) { // function that checks to see if the input box is changed
        CurrentContext.newForename = e.target.value; // places what the user inputted into the current context carReg
        localStorage.setItem("ForenameKey", CurrentContext.newForename);
        CurrentContext.dataChanged = true;

        if (e.target.value) { // check if input field is filled
            setIsInputFilled(true);
        } else {
            setIsInputFilled(false);
        }
    }

    return (
        <>
            <MyHeader />
            <br />
            <fieldset>
                <div class="div2">
                    <h1>
                        <LabelText>Re-Enter your Forename</LabelText>
                    </h1>
                    <Input onInput={newForenameCapture} />
                </div>
                <br />
                <Link to="/UpdatePatientRecords">
                    <Button disabled={!isInputFilled}>Submit</Button> {/*disable button if input field is not filled*/}
                </Link>
            </fieldset>

            <MyFooter />
        </>
    )
};
export default UpdateForename

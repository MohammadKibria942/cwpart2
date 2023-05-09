import MyHeader from '../../Components/MyHeader.js';
import MyFooter from '../../Components/MyFooter.js';

import { Input, LabelText } from 'govuk-react';////import Input and LabelText from govuk-react and govuk-frontend (install through npm)
import { Button } from 'govuk-react';
import { CurrentContext } from "../../EnterPatientDetails";

import { Link } from "react-router-dom";


function UpdateSurname() {

    function newSurnameCapture(e) {//function that checks to see if the input box is changed
        CurrentContext.newSurname = e.target.value;//places what the user inputted into the current context carReg
        localStorage.setItem("SurnameKey", CurrentContext.newSurname);
        CurrentContext.dataChanged = true;
    }

    return (
        <>
            <MyHeader />
            <br />
            <br />

            <fieldset>
                <div class="div2">
                    <LabelText> Re-Enter your Surname</LabelText>
                    <Input onInput={newSurnameCapture} />
                </div>
                <br />
                <Link to="/UpdatePatientRecords"><Button>Submit</Button></Link>
                <br />
            </fieldset>
            
            <MyFooter />
        </>
    )
};
export default UpdateSurname
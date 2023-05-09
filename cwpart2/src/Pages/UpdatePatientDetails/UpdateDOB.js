import { useState } from 'react';
import { Button } from 'govuk-react';
import { CurrentContext } from "../../EnterPatientDetails";
import { Link } from "react-router-dom";
import { DateField } from '@govuk-react/date-field';
import MyHeader from '../../Components/MyHeader.js'; //import Header component
import MyFooter from '../../Components/MyFooter.js'; //import Footer component

function UpdateDOB() {
    const [isInputFilled, setIsInputFilled] = useState(false); // state variable to track whether all input fields are filled or not
    const [errorMessage, setErrorMessage] = useState(""); // state variable to hold the error message
    var varDay = '';
    var varMonth = '';
    var varYear = '';
    var varDate = '';


    function save() {
        if (varDay && varMonth && varYear) { // check if all input fields are filled
            var varDate = varYear + varMonth + varDay;
            console.log(varDate);
            setIsInputFilled(true);
            setErrorMessage("");
        } else {
            setIsInputFilled(false);
            setErrorMessage("Please fill in all the fields."); // set the error message
        }
    }

    return (
        <>
            <MyHeader />
            <br />
            <fieldset>
                <div class="div2">
                    <DateField
                        input={{
                            onBlur: function noRefCheck() { },
                            onChange: function noRefCheck() { },
                            onFocus: function noRefCheck() { }
                        }}
                        inputNames={{
                            day: 'dayInputName'
                        }}
                        inputs={{
                            day: {
                                onInput: function saveDay(e) {
                                    varDay = e.target.value;
                                    localStorage.setItem("DOBDayKey", varDay);
                                    CurrentContext.dataChanged = true;
                                },
                                autoComplete: 'bday-day'
                            },
                            month: {
                                onInput: function saveMonth(e) {
                                    varMonth = e.target.value;
                                    localStorage.setItem("DOBMonthKey", varMonth);
                                    CurrentContext.dataChanged = true;
                                },
                                autoComplete: 'bday-month'
                            },
                            year: {
                                onInput: function saveYear(e) {
                                    varYear = e.target.value;
                                    localStorage.setItem("DOBYearKey", varYear);
                                    CurrentContext.dataChanged = true;
                                },
                                autoComplete: 'bday-year',
                            }
                        }}
                    >
                        Please Re-enter your Date of Birth
                    </DateField>

                    {errorMessage && <div>{errorMessage}</div>} {/* display the error message */}
                    {isInputFilled ? (
                        <Link to="/UpdatePatientRecords">
                            <Button>Submit</Button>
                        </Link>
                    ) : (
                        <Button onClick={() => save()}>Submit</Button>
                    )}
                </div>
            </fieldset>

            <br />
            <MyFooter />
        </>
    );
}

export default UpdateDOB;

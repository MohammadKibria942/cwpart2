import MyHeader from '../Components/MyHeader.js';//Import Header component
import MyFooter from '../Components/MyFooter.js';//import Footer component
import MySummaryList from "../Components/MySummaryList";
import { Button } from 'govuk-react';
import { Link } from "react-router-dom";
import BackLink from '@govuk-react/back-link';
import jq from 'jquery';

function UpdatePatientRecords() {

    function update() {//update the changes made and saves it into the database
        var patientData = {//take all the data and stores into variable
            "NhsNo": localStorage.getItem("NHSNumber"),

            "FORENAME": localStorage.getItem("ForenameKey"),
            "surname": localStorage.getItem("SurnameKey"),
            "DOB": localStorage.getItem("PersonDOBKey"),
            "genderCode": localStorage.getItem("GenderCodeKey"),
            "postCode": localStorage.getItem("PostcodeKey")
        }
        var url_recordsaver = 'http://localhost:4000/RecordSaver.php';//address for the seccond php file

        jq.ajax({//AJAX post
            type: "POST",
            url: url_recordsaver,
            mode: "no-core",
            data: patientData,

            success(data) {//if success then
                console.log(data);
                if (data == 0) {
                    console.log("Error");

                } else {
                    console.log("Updated");

                }
            }
        });
    }

    return (//displays all the components
        <>
            <MyHeader />
            <BackLink href="/">Back</BackLink>
            <br />
            <MySummaryList />
            <fieldset>
                <Link onClick={update} to="/SuccessPage"><Button>Update</Button></Link>
            </fieldset>
            
            <MyFooter />
        </>
    );
}

export default UpdatePatientRecords;
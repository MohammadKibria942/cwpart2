import { CurrentContext } from "../EnterPatientDetails";//import the CurrentContext


function MySummaryList() {

    //create variables and store what was read from the database file
    var varForename = CurrentContext.Forename;
    var varSurname = CurrentContext.Surname;
    var varPersonDOB = CurrentContext.PersonDOB;
    var varGenderCode = CurrentContext.GenderCode;
    var varPostcode = CurrentContext.Postcode;
    var varPersonDOBDay;
    var varPersonDOBMonth;
    var varPersonDOBYear;
    

    function save() {//saves and loads data
        if (CurrentContext.dataChanged == true) {//if any data was changed
            varForename = localStorage.getItem("ForenameKey");//go into local storage and overwrite the variable
            varSurname = localStorage.getItem("SurnameKey");

            varPersonDOB = localStorage.getItem("DOBYearKey") + localStorage.getItem("DOBMonthKey") + localStorage.getItem("DOBDayKey")
            localStorage.setItem("PersonDOBKey", varPersonDOB);

            varGenderCode = localStorage.getItem("GenderCodeKey");
            varPostcode = localStorage.getItem("PostcodeKey");

            //this slices the date of birth to a more readable format
            varPersonDOBYear = varPersonDOB.toString().slice(0, 4);
            console.log("Year")
            console.log(varPersonDOBDay);

            varPersonDOBMonth = varPersonDOB.toString().slice(4, 6);
            console.log("Month")
            console.log(varPersonDOBMonth);

            varPersonDOBDay = varPersonDOB.toString().slice(6, 8);
            console.log("Day")
            console.log(varPersonDOBYear);


        } else {//if the data was not changed insert the read data into the local storage variables
            localStorage.setItem("ForenameKey", varForename);
            localStorage.setItem("SurnameKey", varSurname);
            localStorage.setItem("PersonDOBKey", varPersonDOB);
            localStorage.setItem("GenderCodeKey", varGenderCode);
            localStorage.setItem("PostcodeKey", varPostcode);

            //slices the DOB again
            varPersonDOBYear = varPersonDOB.toString().slice(0, 4);
            console.log("Year")
            console.log(varPersonDOBDay);
            localStorage.setItem("DOBYearKey", varPersonDOBYear);

            varPersonDOBMonth = varPersonDOB.toString().slice(4, 6);
            console.log("Month")
            console.log(varPersonDOBMonth);
            localStorage.setItem("DOBMonthKey", varPersonDOBMonth);

            varPersonDOBDay = varPersonDOB.toString().slice(6, 8);
            console.log("Day")
            console.log(varPersonDOBYear);
            localStorage.setItem("DOBDayKey", varPersonDOBDay);
        }
        
    }

    return (//displays all the components 

        <fieldset class= "fieldset2">

            <dl class="govuk-summary-list" >

                <div class="govuk-summary-list__row" onLoad={save()}>
                    <dt class="govuk-summary-list__key"> Forename </dt>
                    <dd class="govuk-summary-list__value"> {varForename} </dd>
                    <dd class="govuk-summary-list__actions"> <a class="govuk-link" href="/UpdateForename"> Change <span class="govuk-visually-hidden"> Forename</span></a></dd>
                </div>

                <div class="govuk-summary-list__row">
                    <dt class="govuk-summary-list__key"> Surname </dt>
                    <dd class="govuk-summary-list__value"> {varSurname} </dd>
                    <dd class="govuk-summary-list__actions"> <a class="govuk-link" href="/UpdateSurname"> Change <span class="govuk-visually-hidden"> Surname</span></a></dd>
                </div>

                <div class="govuk-summary-list__row">
                    <dt class="govuk-summary-list__key">Date of birth</dt>
                    <dd class="govuk-summary-list__value">Day: {varPersonDOBDay} Month: {varPersonDOBMonth} Year: {varPersonDOBYear}</dd>
                    <dd class="govuk-summary-list__actions"><a class="govuk-link" href="/UpdateDOB">Change<span class="govuk-visually-hidden"> Date Of Birth</span></a></dd>
                </div>

                <div class="govuk-summary-list__row">
                    <dt class="govuk-summary-list__key">Gender</dt>
                    <dd class="govuk-summary-list__value">{varGenderCode}</dd>
                    <dd class="govuk-summary-list__actions"><a class="govuk-link" href="/UpdateGenderCode"> Change <span class="govuk-visually-hidden"> Gender</span></a></dd>
                </div>               

                <div class="govuk-summary-list__row">
                    <dt class="govuk-summary-list__key">PostCode</dt>
                    <dd class="govuk-summary-list__value">{varPostcode}</dd>
                    <dd class="govuk-summary-list__actions"><a class="govuk-link" href="/UpdatePostcode">Change<span class="govuk-visually-hidden"> PostCode</span></a></dd>
                </div>
            
            </dl>
        </fieldset>
    );

}
export default MySummaryList;
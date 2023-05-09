import Button from '@govuk-react/button';
import MyHeader from '../Components/MyHeader.js';//Import Header component
import MyFooter from '../Components/MyFooter.js';//import Footer component
import { Link } from "react-router-dom";

function SuccessPage() {

    return (
        <>
            <MyHeader />

            <div class="govuk-panel govuk-panel--confirmation">
                <h1 class="govuk-panel__title">
                    Update complete
                </h1>
                <div class="govuk-panel__body">
                    Your Record has been Updated
                </div>
                
            </div>
            <fieldset>
                <div class="div2">
                    <Link to="/"><Button>Go Back</Button></Link>
                </div>
            </fieldset>
            
            <MyFooter/>
        </>

    )
}
export default SuccessPage;
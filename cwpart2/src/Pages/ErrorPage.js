import Button from '@govuk-react/button';
import MyHeader from '../Components/MyHeader.js';//Import Header component
import MyFooter from '../Components/MyFooter.js';//import Footer component
import { Link } from 'react-router-dom';
import { H1 } from '@govuk-react/heading';//import H1 from gouk react
import { LabelText } from 'govuk-react'

function ErrorPage() {

    return (//Display all the components for the Error page
        <>
            <MyHeader />

            <fieldset>

                <div class="div2">
                    <H1>ERROR</H1>
                    <LabelText>We could not find your record with that</LabelText>
                    <Link to="/"><Button>Go Back</Button></Link>{/*button to go back to re-enter nhs number*/}
                </div>
            </fieldset>

            <MyFooter />
        </>

    )
}
export default ErrorPage;
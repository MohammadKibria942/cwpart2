import MyHeader from '../Components/MyHeader.js';//Import Header component
import MyFooter from '../Components/MyFooter.js';//import Footer component
import MySummaryList from "../Components/MySummaryList";//imoprt summary list component
import BackLink from '@govuk-react/back-link';//import backlink to take back to previous page

function ViewPatientRecords() {

    return (
        <>
            <MyHeader />
            <BackLink href="/">Back</BackLink>{/*takes back to re-enter details*/}
            <br />
            <MySummaryList />
            <br />
            <MyFooter />
        </>
    );
}
export default ViewPatientRecords;
import { BrowserRouter } from "react-router-dom";
import TopNav from '@govuk-react/top-nav';//import gouk-frontend (install through npm)
import react from 'react';
import Crown from '@govuk-react/icon-crown';

function MyHeader() {

    return (
        <TopNav
            company={<TopNav.Anchor href="https://www.gov.uk" target="new"><TopNav.IconTitle icon={<Crown height="32" width="36" />}>GOV.UK</TopNav.IconTitle></TopNav.Anchor>}
            serviceTitle={<TopNav.NavLink href="/" target="new">View Patient Records</TopNav.NavLink>}
        />
    )
}
export default MyHeader;

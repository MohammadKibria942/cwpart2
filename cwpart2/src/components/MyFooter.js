import { Footer } from '@govuk-react/footer';

function MyFooter() {

    return (
        <Footer
            copyright={{
                image: {
                    height: 102,
                    src: 'C:\Users\lolbo\source\repos\Coursework\Coursework\src\govukLogo.jpg',
                    width: 125
                },
                link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
                text: 'Crown copyright'
            }}
        />
    );
};
export default MyFooter;
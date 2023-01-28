import TheSubTitle from "../../elements/SubTitles/TheSubTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFax } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Contact = (props) => {
    return (
        <>
        <TheSubTitle title={props.title}/>
        <ul className="d-flex flex-column align-items-start me-lg-5">
            <p className="d-flex"><FontAwesomeIcon icon={faPhone} /><span className="me-4">{props.contactInfo.PhoneNumber}</span></p>
            <p className="d-flex"><FontAwesomeIcon icon={faFax} /><span className="me-4">{props.contactInfo.FaxNumber}</span></p>
            <p className="d-flex"><FontAwesomeIcon icon={faEnvelope} /><span className="me-4">{props.contactInfo.Email}</span></p>
            <p className="d-flex"><FontAwesomeIcon icon={faLocationDot} /><span className="me-4">{props.contactInfo.Address}</span></p>
        </ul>
        </>
    );
}

export default Contact ;
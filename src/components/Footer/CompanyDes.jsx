import TheSubTitle from "../../elements/SubTitles/TheSubTitle";
const CompanyDiscription = (props) => {
    return ( 
    <>
        <TheSubTitle title={props.title} />
        <p>
          {props.description}
        </p>
    </> );
}
 
export default CompanyDiscription;
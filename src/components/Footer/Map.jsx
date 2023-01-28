import TheSubTitle from "../../elements/SubTitles/TheSubTitle";

const Map = (props) => {
    return ( 
    <>
    <TheSubTitle title={props.title} />
    <div className="d-flex justify-content-center mt-2"><img className="w-50" src={props.contactInfo.mapImage} alt="" /></div>
    </>
     );
}
 
export default Map;
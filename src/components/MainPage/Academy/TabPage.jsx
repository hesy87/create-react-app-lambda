import { NavLink } from "react-router-dom";
import TheBaseButton from "../../../elements/BaseButton/TheBaseButton";
import "./TabPage.scss";

const TabPage = (props) => {
  return (
    <div className="container borderSet py-2">
      <p className="text py-4">{props.paragraph}</p>
      <div className="text-center text-md-start ms-3 mb-3 ">
        <NavLink to={props.Address}>
          <TheBaseButton />
        </NavLink>
      </div>
    </div>
  );
};

export default TabPage;

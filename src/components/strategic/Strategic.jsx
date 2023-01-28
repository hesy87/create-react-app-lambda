import styles from "./strategic.module.scss";
import PageTitle from "../../elements/PageTitle/PageTitle";
import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import TheBaseTitle from "../../elements/BaseTitles/TheBaseTitle";
import TheBaseParagraph from "../../elements/BaseParagraph/paragraph";
import TheBaseButton from '../../elements/BaseButton/TheBaseButton';

const Strategic = (props) => {
  const ctx = useContext(DataContext);
  return (
    <div className="container">
      <div className="row">
        <PageTitle title={ctx.StrategicMainHeader} />
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
          <div className="col-12 col-md-5 col-lg-6 d-flex justify-content-start align-items-start flex-column">
            <TheBaseTitle title={ctx.StrategicFirstSection.title} />
            <TheBaseParagraph
              paragraph={ctx.StrategicFirstSection.paragraph}
            />
          </div>
          <div className="col-12 text-center col-md-6">
            <img
              src={ctx.StrategicFirstSection.Image}
              width="400"
              alt="Strategic"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-start align-items-start flex-column ">
          <TheBaseTitle title={ctx.StrategicSecondSection.title} />
          <TheBaseParagraph paragraph={ctx.StrategicSecondSection.paragraph} />
        </div>
          <div className="d-flex flex-column align-items-center mt-5 pt-5 mb-2">
            <p>{ctx.StrategicSecondSection.buttonLable}</p>
            <TheBaseButton/>
          </div>
      </div>
    </div>
  );
};

export default Strategic;

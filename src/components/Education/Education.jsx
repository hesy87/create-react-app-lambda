import styles from "./Education.module.scss";
import PageTitle from "../../elements/PageTitle/PageTitle";
import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import TheBaseTitle from "../../elements/BaseTitles/TheBaseTitle";
import TheBaseParagraph from "../../elements/BaseParagraph/paragraph";
import TheBaseButton from '../../elements/BaseButton/TheBaseButton';

const Education = (props) => {
  const ctx = useContext(DataContext);
  return (
    <div className="container">
      <div className="row">
        <PageTitle title={ctx.EducationMainHeader} />
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
          <div className="col-12 col-md-5 col-lg-6 d-flex justify-content-start align-items-start flex-column">
            <TheBaseTitle title={ctx.EducationFirstSection.title} />
            <TheBaseParagraph
              paragraph={ctx.EducationFirstSection.paragraph}
            />
          </div>
          <div className="col-12 text-center col-md-6">
            <img
              src={ctx.EducationFirstSection.Image}
              width="400"
              alt="Education"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-start align-items-start flex-column ">
          <TheBaseTitle title={ctx.EducationSecondSection.title} />
          <TheBaseParagraph paragraph={ctx.EducationSecondSection.paragraph} />
        </div>
          <div className="d-flex flex-column align-items-center mt-5 pt-5 mb-2">
            <p>{ctx.EducationSecondSection.buttonLable}</p>
            <TheBaseButton/>
          </div>
      </div>
    </div>
  );
};

export default Education;

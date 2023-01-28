import styles from "./Virtual.module.scss";
import PageTitle from "./../../elements/PageTitle/PageTitle";
import { useContext } from "react";
import { DataContext } from "./../../context/dataContext";
import TheBaseTitle from "./../../elements/BaseTitles/TheBaseTitle";
import TheBaseParagraph from "./../../elements/BaseParagraph/paragraph";
import TheBaseButton from './../../elements/BaseButton/TheBaseButton';

const Virtual = (props) => {
  const ctx = useContext(DataContext);
  return (
    <div className="container">
      <div className="row">
        <PageTitle title={ctx.VirtualMainHeader} />
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
          <div className="col-12 col-md-5 col-lg-6 d-flex justify-content-start align-items-start flex-column">
            <TheBaseTitle title={ctx.VirtualFirstSection.title} />
            <TheBaseParagraph
              paragraph={ctx.VirtualFirstSection.paragraph}
            />
          </div>
          <div className="col-12 text-center col-md-6">
            <img
              src={ctx.VirtualFirstSection.Image}
              width="400"
              alt="Virtual"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-start align-items-start flex-column ">
          <TheBaseTitle title={ctx.VirtualSecondSection.title} />
          <TheBaseParagraph paragraph={ctx.VirtualSecondSection.paragraph} />
        </div>
          <div className="d-flex flex-column align-items-center mt-5 pt-5 mb-2">
            <p>{ctx.VirtualSecondSection.buttonLable}</p>
            <TheBaseButton/>
          </div>
      </div>
      <div className="row">
        <PageTitle title={ctx.VirtualTafsirMainHeader} />
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
          <div className="col-12 col-md-5 col-lg-6 d-flex justify-content-start align-items-start flex-column">
            <TheBaseTitle title={ctx.VirtualTafsirFirstSection.title} />
            <TheBaseParagraph
              paragraph={ctx.VirtualTafsirFirstSection.paragraph}
            />
          </div>
          <div className="col-12 text-center col-md-6">
            <img
              src={ctx.VirtualTafsirFirstSection.Image}
              width="400"
              alt="Virtual"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-start align-items-start flex-column ">
          <TheBaseTitle title={ctx.VirtualTafsirSecondSection.title} />
          <TheBaseParagraph paragraph={ctx.VirtualTafsirSecondSection.paragraph} />
        </div>
          <div className="d-flex flex-column align-items-center mt-5 pt-5 mb-2">
            <p>{ctx.VirtualTafsirSecondSection.buttonLable}</p>
            <TheBaseButton/>
          </div>
      </div>
    </div>
  );
};

export default Virtual;

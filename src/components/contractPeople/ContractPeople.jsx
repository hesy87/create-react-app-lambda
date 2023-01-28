import styles from "./ContractPeople.module.scss";
import PageTitle from "../../elements/PageTitle/PageTitle";
import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import TheBaseTitle from "../../elements/BaseTitles/TheBaseTitle";
import TheBaseParagraph from "../../elements/BaseParagraph/paragraph";
import TheBaseButton from '../../elements/BaseButton/TheBaseButton';

const ContractPeople = (props) => {
  const ctx = useContext(DataContext);
  return (
    <div className="container">
      <div className="row">
        <PageTitle title={ctx.ContractPeopleMainHeader} />
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
          <div className="col-12 col-md-5 col-lg-6 d-flex justify-content-start align-items-start flex-column">
            <TheBaseTitle title={ctx.ContractPeopleMabaniFirstSection.title} />
            <TheBaseParagraph
              paragraph={ctx.ContractPeopleMabaniFirstSection.paragraph}
            />
          </div>
          <div className="col-12 text-center col-md-6">
            <img
              src={ctx.ContractPeopleMabaniFirstSection.Image}
              width="400"
              alt="ContractPeople"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-start align-items-start flex-column ">
          <TheBaseTitle title={ctx.ContractPeopleMabaniSecondSection.title} />
          <TheBaseParagraph paragraph={ctx.ContractPeopleMabaniSecondSection.paragraph} />
        </div>
          <div className="d-flex flex-column align-items-center mt-5 pt-5 mb-2">
            <p>{ctx.ContractPeopleMabaniSecondSection.buttonLable}</p>
            <TheBaseButton/>
          </div>
      </div>
        {/* tajrobi */}
      <div className="row my-5">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
          <div className="col-12 col-md-5 col-lg-6 d-flex justify-content-start align-items-start flex-column">
            <TheBaseTitle title={ctx.ContractPeopleTajrobiFirstSection.title} />
            <TheBaseParagraph
              paragraph={ctx.ContractPeopleTajrobiFirstSection.paragraph}
            />
          </div>
          <div className="col-12 text-center col-md-6">
            <img
              src={ctx.ContractPeopleTajrobiFirstSection.Image}
              width="400"
              alt="ContractPeople"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-start align-items-start flex-column ">
          <TheBaseTitle title={ctx.ContractPeopleTajrobiSecondSection.title} />
          <TheBaseParagraph paragraph={ctx.ContractPeopleTajrobiSecondSection.paragraph} />
        </div>
          <div className="d-flex flex-column align-items-center mt-5 pt-5 mb-2">
            <p>{ctx.ContractPeopleTajrobiSecondSection.buttonLable}</p>
            <TheBaseButton/>
          </div>
      </div>
      {/* Strategic */}
      <div className="row my-5">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
          <div className="col-12 col-md-5 col-lg-6 d-flex justify-content-start align-items-start flex-column">
            <TheBaseTitle title={ctx.ContractPeopleStrategicFirstSection.title} />
            <TheBaseParagraph
              paragraph={ctx.ContractPeopleStrategicFirstSection.paragraph}
            />
          </div>
          <div className="col-12 text-center col-md-6">
            <img
              src={ctx.ContractPeopleStrategicFirstSection.Image}
              width="400"
              alt="ContractPeople"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 d-flex justify-content-start align-items-start flex-column ">
          <TheBaseTitle title={ctx.ContractPeopleStrategicSecondSection.title} />
          <TheBaseParagraph paragraph={ctx.ContractPeopleStrategicSecondSection.paragraph} />
        </div>
          <div className="d-flex flex-column align-items-center mt-5 pt-5 mb-2">
            <p>{ctx.ContractPeopleStrategicSecondSection.buttonLable}</p>
            <TheBaseButton/>
          </div>
      </div>
    </div>
  );
};

export default ContractPeople;

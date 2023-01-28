import TheBaseTitle from "../../../elements/BaseTitles/TheBaseTitle";
import TheBaseButton from "../../../elements/BaseButton/TheBaseButton";
import styles from "./AboutUs.module.scss"
import { useContext, useState } from "react";
import {DataContext} from "../../../context/dataContext";

const AboutUs = (props) => {
  const ctx = useContext(DataContext)
  return (
    <div className="my-5">
      <TheBaseTitle title={ctx.Title.about}/>
      <div>
        <p className={styles.aboutUsParagraph}>
        {ctx.Title.pragraph}
        </p>
      </div>
      <div className="d-flex justify-content-center my-4">
        <TheBaseButton />
      </div>
    </div>
  );
};

export default AboutUs;

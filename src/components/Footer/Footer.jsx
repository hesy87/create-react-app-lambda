import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import TheSubTitle from "../../elements/SubTitles/TheSubTitle";
import CompanyDiscription from "./CompanyDes";
import Contact from './Contact'
import './Footer.scss'
import Map from "./Map";

const Footer = (props) => {
  const ctx = useContext(DataContext);

  return (
    <>
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <div className="col-12 col-md-3">
        <CompanyDiscription title={ctx.FooterTitle.CompanyName} description={ctx.CompanyDescription}/>
      </div>
      <div className="col-12 col-md-3">
        <Contact title={ctx.FooterTitle.ContactUs} contactInfo={ctx.Contact}/>
      </div>
      <div className="col-12 col-md-3">
        <Map title={ctx.FooterTitle.Location} contactInfo={ctx.Contact}/>
      </div>
    </div>
      <div className="copyRight text-center my-3">
        تمامی حقوق سایت متعلق به شرکت فرتاک می باشد
      </div>
    </>
  );
};

export default Footer;

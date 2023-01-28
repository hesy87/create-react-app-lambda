import PageTitle from "./../../elements/PageTitle/PageTitle";
import { useContext } from 'react';
import { DataContext } from './../../context/dataContext';
import Contact from './../Footer/Contact';
const ContactUsPage = () => {
    const ctx = useContext(DataContext)
  return (
    <div className="container">
      <PageTitle title={ctx.ContactUsPageData.title}/>
      <div className="row">
        <div className="col-12 d-flex flex-column flex-md-row align-items-center">
            <div className="col-10 col-md-6  d-flex flex-column justify-content-center align-items-center">
                <Contact title={ctx.FooterTitle.ContactUs} contactInfo={ctx.Contact}/>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                <img src={ctx.ContactUsPageData.Image} width='400' alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

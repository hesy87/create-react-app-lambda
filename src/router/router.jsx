import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./../components/MainPage/MainPage/MainPage";
import ContactUsPage from "./../components/contactUs/ContactUsPage";
import App from "./../App";
import NotFound from "../components/NotFound/NotFoundPage";
import AboutUsPage from "./../components/AboutUs/AboutUsPage";
import Decision from "../components/Decision/Decision";
import Virtual from './../components/virtual/Virtual';
import ContractPeople from './../components/contractPeople/ContractPeople';
import Strategic from "../components/strategic/Strategic";
import Education from "../components/Education/Education";

const RouterMap = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<MainPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="education" element={<Education />} />
        <Route path="strategic" element={<Strategic />} />
        <Route path="decision" element={<Decision />} />
        <Route path="virtual" element={<Virtual />} />
        <Route path="contract" element={<ContractPeople />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterMap;

import AboutUs from "../AboutUs/AboutUS";
import AcademyTab from "../Academy/AcademyTab";
import CarouselMainPage from "../carousel/Carousel";
import './MainPage.scss'

const MainPage = () => {
  return (
    <div className="container BackgroundColor">
      <CarouselMainPage/>
      <AboutUs />
      <AcademyTab/>
    </div>
  );
};

export default MainPage;

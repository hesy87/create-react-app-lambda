import { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { DataContext } from './../../../context/dataContext';
import './Carousel.scss'
import TheBaseTitle from './../../../elements/BaseTitles/TheBaseTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

const CarouselMainPage = () => {
  const ctx = useContext(DataContext)
  const NextIcon = <FontAwesomeIcon className='text' icon={faCaretRight} />
  const PrevIcon = <FontAwesomeIcon className='text' icon={faCaretLeft} />
  return (
    <div>
      <Carousel nextIcon ={NextIcon} prevIcon={PrevIcon} >
        {ctx.CarouselData.CarouselInfo.map(items =>(
        <Carousel.Item className='col'>
        <img
          className='col-4 img-fluid'
          src={items[0]}
          alt="First slide"
        />
        <Carousel.Caption className='caption col-10 d-flex flex-column'>
          <p className='text'>{items[1]}</p>
          <p className='text'>{items[2]}</p>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselMainPage;

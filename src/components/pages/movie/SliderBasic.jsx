import React from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import Slider from 'react-slick';
import { baseImgUrl } from '../../helpers/functions-general';


const SliderBasic = ({setMovieInfo, movies,setMovieData, grouping, sliderHeader}) => {

  const handleshowMovieInfo = (movies) => {
    setMovieData(movies)
     setMovieInfo(true) 
  

  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        // style={{ ...style, display: "flex", background: "green"}}
        onClick={onClick}>
        <PiCaretRightBold />
    </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            // style={{ ...style, display: "flex", background: "green"}}
            onClick={onClick}>
            <PiCaretLeftBold />
        </div>
    );
  }


  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
        
      };

      const getGroupings = movies.filter((movie) => movie.grouping === grouping)

  return (
    <>
    <h3 className=' text-3xl mb-5 font-bold'>{sliderHeader}</h3>

    <Slider {...settings}>

      {getGroupings.map((movies, key)=> (
      
      <div key={key}>
        <button className='relative ' onClick={() => handleshowMovieInfo(movies)}>
          <div>

          </div>
         
          <img src={`${baseImgUrl}/movies/${movies.image}`} alt="" className='w-[320px] h-[200px] bg-cover' />
          <span className='px-2 py-1 rounded-tl-md rounded-tr-md absolute bottom-0 left-1/2  -translate-x-1/2 bg-red-600 text-whte text-[12]'>Recently Added</span>
        </button>
      </div>
      ))}
    
     
      
    </Slider>
    </>
  );
    
}

export default SliderBasic
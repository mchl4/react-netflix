import React from 'react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import Slider from 'react-slick';
import { baseImgUrl } from '../../helpers/functions-general';

const SliderTop10 = ({setMovieInfo, movies,setMovieData, grouping, sliderHeader}) => {

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
          slidesToShow: 6,
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
            <div className='flex justify-between'>
            <img src={`${baseImgUrl}/movies/netflix-top-10/top10movies/${movies.number}`} alt="" className='w-[290px] h-[300px] bg-cover relative ' />
            <img src={`${baseImgUrl}/movies/netflix-top-10/top10movies/${movies.poster}`} alt="" className='w-[165px] h-[220px] bg-cover absolute top-9 -right-[20%]' />
            </div>
            {/* <span className='px-2 py-1 rounded-tl-md rounded-tr-md absolute bottom-0 left-1/2  translate-x-[30%] bg-red-600 text-whte text-[12]'>Recently Added</span> */}
          </button>
        </div>
        ))}
      
       
        
      </Slider>
      </>
    );
      
  }

export default SliderTop10
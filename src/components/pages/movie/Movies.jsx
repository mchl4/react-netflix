import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import SliderBasic from './SliderBasic';
import ModalMovieInfo from './ModalMovieInfo';
import { movies } from './data';
import SliderTop10 from './SliderTop10';
import ModalSearch from './ModalSearch';


const Movies = () => {
    const [showMovieInfo, setMovieInfo] = React.useState(false)
    const [movieData,setMovieData] = React.useState(null)
    const [search, setSearch] = React.useState(false);

    const handleShowSearch =() => setSearch(true);
  return (
    <>
    <div className='bg-[#141414] text-white'>
    <div className= "banner bg-[url('../../img/movies/banner-movie.webp')] h-[100vh] bg-cover relative ">
        <div className='header py-4 px-14 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.2)]'>
            <div className="flex justify-between items-center">
                <div className='flex item-center gap-10'>
                    <img src={`${baseImgUrl}/logo.png`} alt="" className='w-[148px] object-cover'/>
                    
                        <ul className='flex items-center gap-5 text-white'>
                            <li><Link to="#" >Home</Link></li>
                            <li><Link to="#" >TV Shows</Link></li>
                            <li><Link to="#" >New & Popular</Link></li>
                            <li><Link to="#" >My List</Link></li>
                            <li><Link to="#" >Browse by Language</Link></li>
                        </ul>
                  
                </div>
                <div>
                    <ul className='flex items-center gap-5 text-white'>
                        <li><button onClick={handleShowSearch}><CiSearch className='text-2xl' /></button></li>
                        <li><button><FaRegBell className='text-xl' /></button></li>
                        <li className='flex items-center gap-2'><button><img src="https://via.placeholder.com/50x50" alt="" /></button><FaCaretDown /></li>
                        

                    </ul>
                </div>
            </div>
        </div>

        <div className="absolute left-[4%] bottom-[20%]">
        <img src={`${baseImgUrl}/nseries1.webp`} alt="" className='w-[450px] mb-2 object-cover'/>
            <ul className='flex gap-4'>
                <li><button className='btn px-6 py-1.5 rounded-md bg-white text-stone-800 font-bold flex items-center gap-2'><FaPlay />Trailer</button></li>
                <li><button className='btn px-6 py-1.5 rounded-md bg-stone-800 text-white border-stone-800 flex items-center gap-2'><CiCircleInfo />More Info</button></li>
            </ul>

        </div>
        </div>
        <div className='slider-wrapper px-10 py-20 overflow-hidden'>
       <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping="trending" sliderHeader="Trending Movies"/>
       <SliderBasic setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping="western" sliderHeader="Western Movies"/>
       <SliderTop10 setMovieInfo={setMovieInfo} movies={movies} setMovieData={setMovieData} grouping="top" sliderHeader="Top 10 Movies in the Philippines Today"/>
       </div>
       </div>
       
     {showMovieInfo && <ModalMovieInfo setMovieInfo={setMovieInfo} movieData={movieData}/> } 
    {search &&  <ModalSearch setSearch={setSearch}/>  }
       </>
   
    
  )
}


export default Movies
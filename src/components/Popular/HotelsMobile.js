import React, { useRef, useState, useEffect } from 'react';
import '../Popular/Hotels.css'
import Slide_Img_1 from '../../assets/images/dxb.jpg';
import Slide_Img_2 from '../../assets/images/lhr.jpg';
import Slide_Img_3 from '../../assets/images/mia.jpg';
import Slide_Img_4 from '../../assets/images/acra.jpg';
import Slide_Img_5 from '../../assets/images/zanzibar.jpg';
import Slide_Img_6 from '../../assets/images/nairobi.jpg';

const HotelsMobile = () => {

    const slider = useRef();
    const [position, setPosition] = useState(0); 
    const totalSlides = 6;
    const slideWidth = 60;
    const visibleSlides = 4;
    const maxPosition = -(totalSlides - visibleSlides) * slideWidth;

    useEffect(() => {
        if (slider.current) {
            slider.current.style.width = `${totalSlides * slideWidth}%`;
        }
    }, []);

    const slideForward = () => {
        if (position > maxPosition) {
            setPosition((prev) => prev - slideWidth);
            slider.current.style.transform = `translateX(${position - slideWidth}%)`;
        }
    };

    const slideBackward = () => {
        if (position < 0) {
            setPosition((prev) => prev + slideWidth);
            slider.current.style.transform = `translateX(${position + slideWidth}%)`;
        }
    };

  return (
    <div className='popular-hotels'>
        <div className='w-11/12 mx-auto rounded-lg px-4 py-6 bg-white'>
        
        <div className='w-[95%] mx-auto relative'>
        <h2 className="font-bold text-3xl mb-4">Explore Popular Hotels</h2>
        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-8 next-btn mob-btn ${
                        position <= maxPosition ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500'
                    } p-2 text-white`}
                    onClick={slideForward}
                >
                    <path
                        fillRule="evenodd"
                        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                    />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-8 back-btn mob-btn ${
                        position >= 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500'
                    } p-2 text-white`}
                    onClick={slideBackward}
                >
                    <path
                        fillRule="evenodd"
                        d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                        clipRule="evenodd"
                    />
                </svg>

                <div className="slider">
                    <ul ref={slider} className="flex transition-transform duration-300 ease-in-out">
                        <li className="w-1/4 relative">
                            <div className="slide">
                                <img src={Slide_Img_1} alt="slide 1" className="w-full rounded-lg" />
                            </div>
                            <div className='flex flex-col absolute bottom-0 left-0 p-2 bg-slate-700/75 hotel-title'>
                                <div className='flex gap-1 font-bold text-sm text-white'>Dubai - &#36;1,253</div>
                                <div className='capitalize text-xs text-white'>United arab emirate</div>
                            </div>
                        </li>
                        <li className="w-1/4 relative">
                            <div className="slide">
                                <img src={Slide_Img_2} alt="slide 2" className="w-full rounded-lg" />
                            </div>
                            <div className='flex flex-col absolute bottom-0 left-0 p-2 bg-slate-700/75 hotel-title'>
                                <div className='flex gap-1 font-bold text-sm text-white'>London - &#36;419</div>
                                <div className='capitalize text-xs text-white'>United kingdom</div>
                            </div>
                        </li>
                        <li className="w-1/4 relative">
                            <div className="slide">
                                <img src={Slide_Img_3} alt="slide 3" className="w-full rounded-lg" />
                            </div>
                            <div className='flex flex-col absolute bottom-0 left-0 p-2 bg-slate-700/75 hotel-title'>
                                <div className='flex gap-1 font-bold text-sm text-white'>Miami Area - FL - &#36;256</div>
                                <div className='capitalize text-xs text-white'>United states</div>
                            </div>
                        </li>
                        <li className="w-1/4 relative">
                            <div className="slide">
                                <img src={Slide_Img_4} alt="slide 4" className="w-full rounded-lg" />
                            </div>
                            <div className='flex flex-col absolute bottom-0 left-0 p-2 bg-slate-700/75 hotel-title'>
                                <div className='flex gap-1 font-bold text-sm text-white'>Accra - &#36;148</div>
                                <div className='capitalize text-xs text-white'>ghana</div>
                            </div>
                        </li>
                        <li className="w-1/4 relative">
                            <div className="slide">
                                <img src={Slide_Img_5} alt="slide 5" className="w-full rounded-lg" />
                            </div>
                            <div className='flex flex-col absolute bottom-0 left-0 p-2 bg-slate-700/75 hotel-title'>
                                <div className='flex gap-1 font-bold text-sm text-white'>Zanzibar - &#36;134</div>
                                <div className='capitalize text-xs text-white'>Tanzania</div>
                            </div>
                        </li>
                        <li className="w-1/4 relative">
                            <div className="slide">
                                <img src={Slide_Img_6} alt="slide 5" className="w-full rounded-lg" />
                            </div>
                            <div className='flex flex-col absolute bottom-0 left-0 p-2 bg-slate-700/75 hotel-title'>
                                <div className='flex gap-1 font-bold text-sm text-white'>Kigali - &#36;106</div>
                                <div className='capitalize text-xs text-white'>Rwanda</div>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
        </div>
    </div>
  )
}

export default HotelsMobile
import React, { useRef, useState, useEffect } from 'react';
import './Flights.css'
import Slide_Img_1 from '../../assets/images/dubai.jpg';
import Slide_Img_2 from '../../assets/images/london.jpg';
import Slide_Img_3 from '../../assets/images/toronto.jpg';
import Slide_Img_4 from '../../assets/images/accra.jpg';
import Slide_Img_5 from '../../assets/images/kigali.jpg';

const FlightsMobile = () => {
    const slider = useRef();
    const [position, setPosition] = useState(0); 
    const totalSlides = 5;
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
        <div className="popular-flights">
            <div className="w-11/12 mx-auto">
                <h2 className="font-bold text-3xl mb-4">Popular Flights</h2>
            </div>
            <div className="relative w-11/12 mx-auto overflow-hidden">
                
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-8 next-btn ${
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
                    className={`size-8 back-btn ${
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
                                <img src={Slide_Img_1} alt="slide 1" className="w-full rounded" />
                            </div>
                            <div
                                className='slideTitle py-1 px-3 rounded-full bg-white text-slate-700 font-bold absolute bottom-2 left-2 flex items-center gap-2 text-sm'>Dubai
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                                </svg>
                                &#8358;1,153,534</div>
                        </li>
                        <li className="w-1/4 relative">
                            <div className="slide">
                                <img src={Slide_Img_2} alt="slide 2" className="w-full rounded" />
                            </div>
                            <div
                                className='slideTitle py-1 px-3 rounded-full bg-white text-slate-700 font-bold absolute bottom-2 left-2 flex items-center gap-2 text-sm'>London
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                                </svg>
                                &#8358;761,071</div>
                        </li>
                        <li className="w-1/4 relative">
                            <div className="slide">
                                <img src={Slide_Img_3} alt="slide 3" className="w-full rounded" />
                            </div>
                            <div
                                className='slideTitle py-1 px-3 rounded-full bg-white text-slate-700 font-bold absolute bottom-2 left-2 flex items-center gap-2 text-sm'>Canada
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                                </svg>
                                &#8358;1,883,298</div>
                        </li>
                        <li className="w-1/4 relative">
                            <div className="slide">
                                <img src={Slide_Img_4} alt="slide 4" className="w-full rounded" />
                            </div>
                            <div
                                className='slideTitle py-1 px-3 rounded-full bg-white text-slate-700 font-bold absolute bottom-2 left-2 flex items-center gap-2 text-sm'>Accra
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                                </svg>
                                &#8358;263,233</div>
                        </li>
                        <li className="w-1/4 relative">
                            <div className="slide">
                                <img src={Slide_Img_5} alt="slide 5" className="w-full rounded" />
                            </div>
                            <div
                                className='slideTitle py-1 px-3 rounded-full bg-white text-slate-700 font-bold absolute bottom-2 left-2 flex items-center gap-2 text-sm'>Kigali
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                                </svg>
                                &#8358;817,611</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FlightsMobile;

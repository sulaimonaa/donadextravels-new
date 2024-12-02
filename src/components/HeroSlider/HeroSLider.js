// HeroSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero1 from '../../assets/images/h11.jpg'
import Hero2 from '../../assets/images/h22.jpg'
import Hero3 from '../../assets/images/h33.jpg'

const HeroSlider = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true
    };

    const slides = [
        {
            id: 1,
            imgSrc: Hero1,
            alt: 'Hero Image 1',
            title: 'Travel with Ease',
            description: 'Enjoy a hassle free travel when you book with us'
        }, {
            id: 2,
            imgSrc: Hero2,
            alt: 'Hero Image 2',
            title: 'Hotel Reservation',
            description: 'Enjoy a hassle free travel when you book with us'
        }, {
            id: 3,
            imgSrc: Hero3,
            alt: 'Hero Image 3',
            title: 'Visa Processing',
            description: 'Enjoy a hassle free travel when you book with us'
        }
    ];

    return (
        <div className="hero-slider w-11/12 mx-auto mt-6">
            <Slider {...sliderSettings}>
                {
                    slides.map((slide) => (
                        <div key={slide.id}>
                            <img
                                className='rounded-xl'
                                src={slide.imgSrc}
                                alt={slide.alt}
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}/>
                            <div className='absolute top-0 w-full sm:hidden lg:block md:w-64 lg:w-80 xl:w-[32rem] h-full'>
                                <div className='h-full flex flex-col justify-center md:ps-4 lg:ps-[2rem] xl:ps-[12rem]'>
                                    <div className='bg-slate-900/75 md:rounded-lg p-4 flex flex-col justify-center'>
                                        <h1 className='font-bold text-xl lg:text-3xl text-center md:text-start text-white'>{slide.title}</h1>
                                        <p className='w-full text-sm lg:text-xl text-center md:text-start lg:w-64 text-white'>{slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default HeroSlider;

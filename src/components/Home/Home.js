import React from 'react'
import HeroSlider from '../HeroSlider/HeroSLider'
import Form1 from '../BookingForm/Form1'
import Navigation1 from '../Navigation/Navigation1'
import Flights from '../Popular/Flights'
import FlightsMobile from '../Popular/FlightsMobile'
import Hotels from '../Popular/Hotels'
import HotelsMobile from '../Popular/HotelsMobile'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <>
        <Navigation1 />
        <div className="relative pb-[4rem]">
            <HeroSlider />
            <div className="md:absolute top-0 left-0 w-full h-full">
                <div className='w-11/12 mx-auto md:flex md:flex-col lg:flex-row justify-center items-center h-full md:px-2 lg:px-4'>
                    <div className='lg:basis-1/2'>
                    </div> 
                    <div className='lg:basis-1/2'>
                        <Form1 />
                    </div>              
                 </div>
            </div>
      </div>
      <div className='hidden md:block'>
      <Flights />
      </div>
      <div className='md:hidden'>
      <FlightsMobile />
      </div>
      <div className='hidden md:block'>
      <Hotels />
      </div>
      <div className='md:hidden'>
      <HotelsMobile />
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
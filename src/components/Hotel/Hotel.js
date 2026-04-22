import React from 'react'
import Navigation1 from '../Navigation/Navigation1'
import Footer from '../Footer/Footer'
import HeroTitle from '../HeroSlider/HeroTitle'
import hero1 from '../../assets/images/hth.jpg';
import { LuTreePalm } from 'react-icons/lu';
import { TbGlobeFilled } from 'react-icons/tb';
import { MdSupportAgent } from 'react-icons/md';
import { FaPlaneDeparture } from 'react-icons/fa';

const Hotel = () => {
  const hotelLib = [
    {
      id:1,
      name: 'Ink 48 Hotel',
      city: 'New York',
      description: "653 11th Avenue at 48th, Hell's Kitchen, New York, NY 10036, United States",
      amount: '376',
      rating: '7.9'
    },
    {
      id:2,
      name: 'The River Inn',
      city: 'Washington',
      description: '924 25th Street Northwest, Northwest, Washington, DC 20037, United States',
      amount: '671',
      rating: '8.9'
    },
    {
      id:3,
      name: 'Sentral Alea Miami',
      city: 'Miami',
      description: '230 Northeast 4th Street, Miami, FL 33132, United States',
      amount: '491',
      rating: '8.4'
    },
    {
      id:4,
      name: 'Rove City Walk',
      city: 'Dubai',
      description: "Al Wasl & Al Safa Road-Junction, Sheikh Zayed Road, PO Box 119444, Dubai",
      amount: '117',
      rating: '9.4'
    },
    {
      id:5,
      name: 'Atlantis The Royal',
      city: 'Dubai',
      description: 'Crescent Road East, Palm Jumeirah, Dubai, Dubai',
      amount: '1,062',
      rating: '9.4'
    },
    {
      id:6,
      name: 'Radisson Dubai',
      city: 'Miami',
      description: 'Al Hebiah, Artesia cluster at DAMAC Hills, Dubai',
      amount: '164',
      rating: '9.0'
    }
  ]

    return (
        <> < Navigation1 /> 
        <HeroTitle title='Hotel'/>
        <div className='md:flex py-6 md:py-[4rem] bg-white'>
          <div className='basis-1/2 mb-3 flex items-center'>
            <img src={hero1} alt='travel tour' className='w-100'/>
          </div>
          <div className='basis-1/2 px-4 md:px-[2rem]'>
            <h4 className='uppercase text-red-500 mb-3'>We make things happen</h4>
            <h2 className='font-bold text-4xl mb-3'>Hotel Deals you'll love</h2>
            <p className='text-sm leading-4 md:leading-6 lg:leading-8'>
            Embark on a journey beyond the ordinary, where every destination is rich with untold stories and hidden wonders.
<br/><br/>
With 5 years+ of firsthand exploration, our team of travel designers curates immersive experiences that break the routine, ignite the senses, satisfy curiosity, and deepen connections—all set against breathtaking landscapes.
            </p>
            <h2 className='font-bold text-4xl my-4'>Why Choose Us?</h2>
            <div className='flex flex-col gap-4 items-center mt-4 py-4'>
              <div className='rounded bg-red-500 relative h-[80px] w-[300px] shadow-2xl shadow-red-500/30'>
                <div className='rounded-s-none rounded ms-1 bg-white absolute h-[80px] w-[300px] top-0 p-4 flex gap-3 items-center'>
                  <div><LuTreePalm className='text-2xl' /></div>
                  <div className='flex flex-col gap-1'>
                    <h5 className='uppercase font-bold text-xs'>Customized Travel Plans</h5>
                    <p className='text-xs'>
                      Tailored itineraries that suit your preferences and budget
                    </p>
                  </div>
                </div>
              </div>
              <div className='rounded bg-red-500 relative h-[80px] w-[300px] shadow-2xl shadow-red-500/30 ms-[2rem]'>
                <div className='rounded-s-none rounded ms-1 bg-white absolute h-[80px] w-[300px] top-0 p-4 flex gap-2 items-center'>
                  <div><TbGlobeFilled className='text-2xl' /></div>
                  <div className='flex flex-col gap-1'>
                    <h5 className='uppercase font-bold text-xs'>Expert Guidance</h5>
                    <p className='text-xs'>
                      Our knowledgeable agents provide insider tips and destination insights
                    </p>
                  </div>
                </div>
              </div>
              <div className='rounded bg-red-500 relative h-[80px] w-[300px] shadow-2xl shadow-red-500/30'>
                <div className='rounded-s-none rounded ms-1 bg-white absolute h-[80px] w-[300px] top-0 p-4 flex gap-2 items-center'>
                  <div><MdSupportAgent className='text-2xl'/></div>
                  <div className='flex flex-col gap-1'>
                    <h5 className='uppercase font-bold text-xs'>24/7 Support</h5>
                    <p className='text-xs'>
                      We’re here for you every step of the way
                    </p>
                  </div>
                </div>
              </div>
              <div className='rounded bg-red-500 relative h-[80px] w-[300px] shadow-2xl shadow-red-500/30 ms-[2rem]'>
                <div className='rounded-s-none rounded ms-1 bg-white absolute h-[80px] w-[300px] top-0 p-4 flex gap-2 items-center'>
                  <div><FaPlaneDeparture className='text-2xl'/></div>
                  <div className='flex flex-col gap-1'>
                    <h5 className='uppercase font-bold text-xs'>Unbeatable Deals</h5>
                    <p className='text-xs'>
                      Enjoy the best value for your money on flights, accommodations, and tours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-11/12 mx-auto py-6 md:py-[4rem]'>
            <div className='flex gap-4 items-center justify-center flex-wrap'>
            {hotelLib.map((hotelCard, key) => (
                <div className='rounded bg-red-500 relative h-[160px] w-[300px] shadow'>
                    <div className='rounded-s-none rounded ms-1 bg-white absolute h-[160px] top-0 w-[300px] p-4 flex flex-col justify-center' key={hotelCard.id}>
                        <div className='bg-gray-100 p-2 flex justify-between rounded'>
                        <div className='font-black text-xm'>{hotelCard.name}</div>
                        <div className='text-sm'>{hotelCard.city}</div>
                        </div>
                        <div className='mt-2 text-xs flex gap-2 items-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" />
</svg>

                          {hotelCard.description}
                        </div>
                        <div className='flex justify-between items-center mt-2'>
                        <div className='uppercase font-black'>Cost per night: ${hotelCard.amount}</div>
                        <div className='bg-red-500 hover:bg-red-500/90 transition-transform duration-500 ease-in-out rounded-full text-white p-2 text-xs animate-bounce'>{hotelCard.rating}</div>
                        
                        </div>
                    </div>
                  
                </div>
                ))}
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default Hotel
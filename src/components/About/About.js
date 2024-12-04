import React from 'react'
import './About.css'
import Navigation1 from '../Navigation/Navigation1'
import Footer from '../Footer/Footer'
import Trv from '../../assets/images/trv.png'
import Passport from '../../assets/images/passport.png'
import Deals from '../../assets/images/sunbed.png'
import CustomerSupport from '../../assets/images/customer-support.png'
import Guidances from '../../assets/images/guidances.png'

const About = () => {
    return (
        <> < Navigation1 /> <div className='aboutHero flex flex-col items-center justify-center gap-2'>
            <h2 className='text-xl md:text-3xl font-bold text-white text-center'>Welcome to Donadex Travels and Tours</h2>
            <h4 className='text-md md:text-xl font-thin uppercase text-white text-center'>where your journey begins</h4>
        </div>
        <div className='aboutIntro'>
            <div className='w-11/12 mx-auto md:flex flex-row-reverse items-center'>
                <div className='basis-1/2'>
                    <h3 className='text-2xl md:text-4xl w-64 md:w-96 capitalize text-blue-900 font-bold mb-3'>Specialist in Travel solutions...</h3>
                    <p className='text-sm md:text-md'>
                        Welcome to Donadex Travels and Tours where your journey begins, Donadex Travels
                        and Tours is a top-tier online travel platform that offers various services like
                        flight bookings, hotel reservations, visa assistance, tour packages, travel
                        financing, protocol services, airport pickups, Blue Ribbon services, and more to
                        meet all your travel needs. 
                        <br/><br/>
                        At Donadex Travels and Tours, we are passionate
                        about giving you unforgettable travel experiences according to your unique
                        needs. Whether you’re planning a relaxing getaway, an adventurous expedition, or
                        a business trip, our expert team is dedicated to turning your dream journey into
                        reality. 
                        <br/><br/>
                        With years of industry expertise, we offer personalized itineraries,
                        exclusive deals, and top-notch customer service to ensure your trip is seamless
                        and stress-free. From breathtaking destinations to hidden gems, we’ll take you
                        there with ease and style. Let us take care of the details while you create
                        memories that last a lifetime. At Donadex Travels and Tours, your adventure is
                        our priority!
                    </p>
                </div>
                <div className='basis-1/2 md:flex justify-center'>
                    <img src={Trv} alt='travelers' className='md:w-4/5'/>
                </div>
            </div>
        </div>
        <div className='aboutCta'>
            <div className='w-11/12 mx-auto'>
                <h3 className='text-2xl md:text-4xl text-blue-900 font-bold mt-3 mb-4 text-center'>Why Choose Us?</h3>
                <div className='spacer'></div>
                <div className='md:flex gap-1'>
                    <div className='basis-1/4 mb-4 md:mb-0'>
                        <div className='flex gap-2 items-center mb-4'>
                            <img src={Passport} alt='Travel deals' className='w-8'/>
                            <h4 className='font-bold text-blue-900'>Customized Travel Plans</h4>
                        </div> 
                        <p>
                            Tailored itineraries that suit your preferences and budget.
                                </p> 
                    </div>
                    <div className='basis-1/4 mb-4 md:mb-0'>
                        <div className='flex gap-2 items-center mb-4'>
                            <img src={Guidances} alt='Expert Guidance' className='w-8'/>
                            <h4 className='font-bold text-blue-900'>Expert Guidance</h4>
                        </div> 
                        <p>
                            Our knowledgeable agents provide insider tips and destination insights.
                                </p> 
                    </div>
                    <div className='basis-1/4 mb-4 md:mb-0'>
                        <div className='flex gap-2 items-center mb-4'>
                            <img src={CustomerSupport} alt='24/7 Support' className='w-8'/>
                            <h4 className='font-bold text-blue-900'>24/7 Support</h4>
                        </div> 
                        <p>
                            We’re here for you every step of the way.
                                </p> 
                    </div>
                    <div className='basis-1/4 mb-4 md:mb-0'>
                        <div className='flex gap-2 items-center mb-4'>
                            <img src={Deals} alt='Unbeatable Deals' className='w-8'/>
                            <h4 className='font-bold text-blue-900'>Unbeatable Deals</h4>
                        </div> 
                        <p>
                            Enjoy the best value for your money on flights, accommodations, and tours.
                                </p> 
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default About
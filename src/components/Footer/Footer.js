import React from 'react'
import '../Footer/Footer.css'
import Logo from '../../assets/images/dtr-logo.png'
import { Link } from 'react-router-dom'
import WhatsAppChat from './WhatsAppChat'

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className='w-11/12 mx-auto'>
            <div className='mb-4'>
                <p className='text-sm'>
                Donadex Travels and Tours is a top-tier online travel platform that offers various services like flight bookings, hotel reservations, visa assistance, tour packages, travel financing, protocol services, airport pickups, Blue Ribbon services, and more to meet all your travel needs. We are passionate about giving you unforgettable travel experiences according to your unique needs. Whether you’re planning a relaxing getaway, an adventurous expedition, or a business trip, our expert team is dedicated to turning your dream journey into reality.
<br/><br/>
With years of industry expertise, we offer personalized itineraries, exclusive deals, and top-notch customer service to ensure your trip is seamless and stress-free. From breathtaking destinations to hidden gems, we’ll take you there with ease and style. Let us take care of the details while you create memories that last a lifetime. 

                </p>
            </div>
            <div className='md:flex pt-[2rem]'>
                <div className='basis-1/4 items-center'>
                    <Link to='../'>
                    <img src={Logo} alt='logo' className='w-48 mb-3'/>
                    </Link>
                </div>
                <div className='basis-1/4'>
                    <h4 className='font-bold mb-3'>Company</h4>
                    <ul>
                        <li className='mb-3'><Link to='about'>About Us</Link></li>
                        <li className='mb-3'><Link to='#blog'>Blog</Link></li>
                        <li className='mb-3'><Link to='#contact'>Contact Us</Link></li>
                        <li className='mb-3'><Link to='#terms'>Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div className='basis-1/4'>
                    <h4 className='font-bold mb-3'>Quick Link</h4>
                    <ul>
                        <li className='mb-3'><Link to='../flight'>Flights</Link></li>
                        <li className='mb-3'><Link to='../hotel'>Hotels</Link></li>
                        <li className='mb-3'><Link to='../visa'>Visas</Link></li>
                        <li className='mb-3'><Link to='#visa'>Specials</Link></li>
                    </ul>
                </div>
                <div className='basis-1/4'>
                    <h4 className='font-bold mb-3'>Connect with Us</h4>
                    <ul>
                        <li className='mb-3'><Link to='#flight'>7, Imam Saka Street, Graceland Estate, Federal Road, Lagos.</Link></li>
                        <li className='mb-3'>07036168688</li>
                        <li className='mb-3'>07013771792</li>
                        <li className='mb-3'>info@travel.donadextechnology.com</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='absolute right-0 bottom-5'>
            <WhatsAppChat />
        </div>
    </div>
  )
}

export default Footer
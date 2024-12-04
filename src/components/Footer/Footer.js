import React from 'react'
import '../Footer/Footer.css'
import Logo from '../../assets/images/dtr-logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className='w-11/12 mx-auto'>
            <div className='md:flex'>
                <div className='basis-1/4 items-center'>
                    <Link to='/'>
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
                        <li className='mb-3'><Link to='flight'>Flights</Link></li>
                        <li className='mb-3'><Link to='hotel'>Hotels</Link></li>
                        <li className='mb-3'><Link to='visa'>Visas</Link></li>
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
    </div>
  )
}

export default Footer
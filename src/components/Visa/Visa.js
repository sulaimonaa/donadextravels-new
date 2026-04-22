import React from 'react'
import Navigation1 from '../Navigation/Navigation1'
import Footer from '../Footer/Footer'
import HeroTitle from '../HeroSlider/HeroTitle'
import SearchVisa from './SearchVisa'
import VisaInfo from './VisaInfo'

const Visa = () => {
  return (
    <>
    <Navigation1 />
    <HeroTitle title='Visa' />
    <VisaInfo />
    <SearchVisa />
    <Footer />
    </>
  )
}

export default Visa
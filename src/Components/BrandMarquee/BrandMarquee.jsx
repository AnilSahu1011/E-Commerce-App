import React from 'react'
import Marquee from 'react-marquee-slider'
import { assets } from '../../assets/assets'
import './BrandMarquee.css'

function BrandMarquee({direction}) {
  return (
    <div className='images image-container'>
      <Marquee velocity={20} direction={direction}>
        <div><img src={assets.LogoExcide} alt="Excide Logo" /></div>
        <div><img src={assets.LogoHavells} alt="Havells Logo" /></div>
        <div><img src={assets.LogoKhaitan} alt="Khaitan Logo" /></div>
        <div><img src={assets.LogoOrient} alt="Orient Logo" /></div>
        <div><img src={assets.LogoPanasonic} alt="Panasonic Logo" /></div>
        <div><img src={assets.LogoPegion} alt="Pigeon Logo" /></div>
        <div><img src={assets.LogoPrestige} alt="Prestige Logo" /></div>
        <div><img src={assets.LogoUsha} alt="Usha Logo" /></div>
        <div><img src={assets.LogoCrompton} alt="V-Guard Logo" /></div>
        <div><img src={assets.LogoAlmord} alt="" /></div>
        <div><img src={assets.LogoLegrand} alt="" /></div>
        <div><img src={assets.LogoCona} alt="" /></div>
        <div><img src={assets.LogoVoltas} alt="" /></div>
        <div><img src={assets.LogoVguard} alt="" /></div>
      </Marquee>
    </div>
  )
}

export default BrandMarquee

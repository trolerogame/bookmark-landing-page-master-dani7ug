import React from 'react'
import Logo from './Logo'
import facebook from '../../public/icon-facebook.svg'
import twitter from '../../public/icon-twitter.svg'
import { InfoFooter } from '../styles/styleBody'
const Footer = () => 
    <InfoFooter>
        <div id='info'>
            <Logo />
            <p>FEATURES</p>
            <p>PRICING</p>
            <p>CONTACT</p>
        </div>
        <div id='logo'>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
        </div>
    </InfoFooter>


export default Footer

import React,{useState} from 'react'
import { ContainInfoHeader,InfoHeader } from '../styles/styleHeader'
import { ButtonRed } from '../styles/styleBody'
import Logo from './Logo'
import Hamburger from '../../public/icon-hamburger.svg'
import closeIcon from '../../public/icon-close.svg'
import facebook from '../../public/icon-facebook.svg'
import twitter from '../../public/icon-twitter.svg'
const Header = () => {
    const [close,setClose] = useState(false)
    return (
        <ContainInfoHeader close={!close}>
            <div id='buttonLogo'>
                <Logo color="#fff" color2={close ? '#fff' : ''} color3={close ? 'rgb(40,40,50,.9)' : ''}/>
                <img src={close ? closeIcon : Hamburger} onClick={() => setClose(!close)}/>
            </div>
            <div id='info'>
                <InfoHeader>
                    <p>FEATURES</p>
                    <p>PRICING</p>
                    <p>CONTACT</p>
                </InfoHeader>
                <ButtonRed>LOGIN</ButtonRed>
            </div>
            {close && 
                <div id='networks'>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                </div>
            }
      </ContainInfoHeader>
    )
}

export default Header

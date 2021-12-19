import React,{useState} from 'react'
import { ContainInfoHeader,InfoHeader } from '../styles/styleHeader'
import { ButtonRed } from '../styles/styleBody'
import Logo from './Logo'
import Hamburger from '../../public/icon-hamburger.svg'
import closeIcon from '../../public/icon-close.svg'
const Header = () => {
    const [close,setClose] = useState(false)
    return (
        <ContainInfoHeader close={!close}>
            <div id='buttonLogo'>
                <Logo color="#fff"/>
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
      </ContainInfoHeader>
    )
}

export default Header

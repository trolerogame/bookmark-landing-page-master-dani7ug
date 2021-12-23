import React from 'react'
import { CartExtensionStyle,ButtonRed } from '../styles/styleBody'
const CartExtension = ({search,version,image}) => 
    <CartExtensionStyle>
        <img src={image} alt="" />
        <b>Add to {search}</b>
        <p>Minimum version {version}</p>
        <ButtonRed color='hsl(231, 69%, 60%)'>Add & Install Extension</ButtonRed>
    </CartExtensionStyle>


export default React.memo(CartExtension)

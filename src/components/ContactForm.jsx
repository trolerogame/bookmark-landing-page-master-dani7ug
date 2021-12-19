import React from 'react'
import {ContainForm} from '../styles/styeContactForm'
import { ButtonRed } from '../styles/styleBody'
const ContactForm = () => {
    return (
        <ContainForm>
            <p>35,000+ already joined</p>
            <h2>Stay up-to-date with what we’re doing</h2>
            <div>
                <input type="text" placeholder='Enter your email address'/>
                <ButtonRed>Contact Us</ButtonRed>
            </div>
        </ContainForm>
    )
}

export default ContactForm

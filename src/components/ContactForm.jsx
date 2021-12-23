import React,{useRef,useState} from 'react'
import {ContainForm} from '../styles/styeContactForm'
import { ButtonRed } from '../styles/styleBody'
import iconError from '../../public/icon-error.svg'
const ContactForm = () => {
    const ref = useRef(null)
    const [error,setError] = useState(false)
    const onSubmit = e => {
        e.preventDefault();
        let isTrue = 
            ref.current.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g)
        if(isTrue)
            ref.current.value = ''
        setError(!isTrue)
    }
    return (
        <ContainForm onSubmit={onSubmit} error={error}>
            <p>35,000+ already joined</p>
            <h2>Stay up-to-date with what we’re doing</h2>
            <div id='containButtonInput'>
                <div id='containInput'>
                    {error && <img src={iconError} alt="" />}
                    <input ref={ref} type="text" placeholder='Enter your email address'/>
                </div>
                <ButtonRed type="submit">Contact Us</ButtonRed>
            </div>
        </ContainForm>
    )
}

export default ContactForm

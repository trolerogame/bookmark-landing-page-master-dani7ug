import React,{useState} from 'react'
import {QuestionStyle} from '../styles/styleBody'
import arrow from '../../public/icon-arrow.svg'
const Question = ({question,response}) => {
    const [close,setClose] = useState(false)
    return (
        <QuestionStyle close={close}>
            <div className='title'>
                <p>{question}</p>
                <img src={arrow} alt="arrow" onClick={() => setClose(!close)} />
            </div>
            <div className="text">
                <p>{response}</p>
            </div>
        </QuestionStyle> 
    )
}


export default Question

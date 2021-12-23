import React,{useState} from 'react'
import illustrationHero from '../../public/illustration-hero.svg'
import {ContainText,RadioButton,ContainRadio,ContainCart,ContainIllustrator,ButtonRed,ContainIllustration,TextExplain,ContainDiv} from '../styles/styleBody'
import CartExtension from './CartExtension'
import Question from './Question'
import question from '../Questions.json'
import features from '../Features.json'
const Body = () => {
    const [num,setNum] = useState(0)
    return (
        <main>
            <ContainIllustrator reverse>
                <ContainText>
                    <h2>A Simple Bookmark Manager</h2>
                    <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div id='containButtons'>
                        <ButtonRed color='hsl(231, 69%, 60%)'>Get it on Chrome</ButtonRed>
                        <ButtonRed color='#f2f2f2'>Get it on Firefox</ButtonRed>
                    </div>
                </ContainText>
                <ContainIllustration>
                    <img src={illustrationHero} alt="" />
                </ContainIllustration>
            </ContainIllustrator>
            {/* Features */}
            <TextExplain>
                <h2>Features</h2>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </TextExplain>
                <ContainRadio > 
                    {features.map(({button,id}) => 
                        <RadioButton 
                            num={num === id ? 'true' : ''}
                            key={id}
                            onClick={() => setNum(id)}
                        >
                            {button}
                        </RadioButton>    
                    )}
                </ContainRadio>
                <ContainIllustrator>
                    <ContainIllustration>
                        <img src={features[num].image} alt="" />
                    </ContainIllustration>
                    <ContainText>
                        <h2>{features[num].title}</h2>
                        <p>{features[num].text}</p>
                        <ButtonRed color='hsl(231, 69%, 60%)'>More Info</ButtonRed>
                    </ContainText>
                </ContainIllustrator>
            {/* Cart extensions*/}
            <TextExplain>
                <h2>Download the extension</h2>
                <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            </TextExplain>
            <ContainCart>
                <CartExtension
                    search='Chrome'
                    version='62'
                    image='../../public/logo-chrome.svg'
                />
                <CartExtension
                    search='Firefox'
                    version='55'
                    image='../../public/logo-firefox.svg'
                />
                <CartExtension
                    search='Opera'
                    version='46'
                    image='../../public/logo-opera.svg'
                />
            </ContainCart>
            {/* Questions */}
            <TextExplain>
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            </TextExplain>
            <ContainDiv>
                {question.map(elem => 
                    <Question {...elem} key={elem.id}/>
                )}
                <ButtonRed color='hsl(231, 69%, 60%)'>More Info</ButtonRed>
            </ContainDiv>
        </main>
    )
}

export default Body

import React from 'react'
import illustrationHero from '../../public/illustration-hero.svg'
import {ContainIllustrator,ButtonRed,ContainIllustration,TextExplain} from '../styles/styleBody'
const Body = () => {
    return (
        <article>
            <ContainIllustrator>
                <ContainIllustration>
                    <img src={illustrationHero} alt="" />
                </ContainIllustration>
                <div>
                    <h2>A Simple Bookmark Manager</h2>
                    <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div id='containButtons'>
                        <ButtonRed color='hsl(231, 69%, 60%)'>Get it on Chrome</ButtonRed>
                        <ButtonRed color='#f2f2f2'>Get it on Firefox</ButtonRed>
                    </div>
                </div>
            </ContainIllustrator>
            {/* Features */}
            <TextExplain>
                <h2>Features</h2>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </TextExplain>
            <div>
                <div>
                    <input type="radio" name='radio' placeholder="Simple Bookmarking"/>
                    <input type="radio" name='radio' placeholder="Speedy Searching"/>
                    <input type="radio" name='radio' placeholder="Easy Sharing"/>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </div>
            {/* Cart extensions*/}

            <TextExplain>
                <h2>Download the extension</h2>
                <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            </TextExplain>
            <div>
                <div>
                    <img src="" alt="" /><b></b>
                    <p></p>
                    <button></button>
                </div>
            </div>
            {/* Questions */}
            <TextExplain>
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            </TextExplain>
            <div>
                <div>
                    <b></b>
                    <p></p>
                    <img src="" alt="" />
                </div>
            </div>
            <button>More Info</button>
        </article>
    )
}

export default Body

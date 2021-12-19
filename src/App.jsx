import React from 'react'
import {GlobalStyle} from './styles/styleBody'
import Body from './components/Body'
import ContactForm from './components/ContactForm'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Body/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App

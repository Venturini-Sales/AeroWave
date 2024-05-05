import React, { Children } from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser'
import './Footer.css'
import  Modal  from '../components/Modal';
import Logo from '../assets/img/AeroWave.png'
import aeLogo from '../assets/svg/American-express-logo.svg'
import mLogo from '../assets/svg/Maestro-logo.svg'
import ppLogo from '../assets/svg/Paypal-logo.svg'
import vLogo from '../assets/svg/Visa-logo.svg'
import bLogo from '../assets/svg/Bitcoin-logo.svg'
import dcLogo from '../assets/svg/Dinners-club-logo.svg'
import linkedinLogo from '../assets/svg/Linkedin-icon.svg'
import githubLogo from '../assets/svg/Github-icon.svg'
import whatsappLogo from '../assets/svg/Whatsapp-icon.svg'

function Footer() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

function sendEmail(e){
  e.preventDefault(); 

  if (name === '' || email === '' || message === '' ){
    toast.warning("Preencha todos os campos")
    return;
  }

  const templateParams = {
    from_name: name,
    message: message,
    email: email
  }

  emailjs.send("service_30h19fz", "template_5epny0i", templateParams, "YWSfj3h8senTL6N1j")
  .then((response) => {
    console.log("EMAIL ENVIADO", response.status, response.text)
    setName("")
    setEmail("")
    setMessage("")
  }, (err) => {
    console.log("ERROR:", err)
  })
}


const [openModal, setOpenModal] = useState(false)

    return (
      <footer>

        <div className='footer'> 

              <div className='footerContent'>

                <div className='staffContent'>
                  <img src={Logo} alt="AeroWave logo" className='logoFooter'/>
                  <p className='staffWrite'>Awaken nostalgia,<br/> elevate sound.</p>
                </div>
                
              </div>

              <div className='footerContent'>

                <div className='paymentArea'>

                  <div className='paymentTitle'>
                      <h2>Payment With</h2>
                  </div>

                  <div className='paymentContent'> 
                      <img src={aeLogo} alt="American Express Logo" className='paymentLogo' />
                      <img src={mLogo} alt="Maestro Logo" className='paymentLogo' />
                      <img src={ppLogo} alt="Paypal Logo" className='paymentLogo' />
                      <img src={vLogo} alt="Visa Logo" className='paymentLogo' />
                      <img src={bLogo} alt="Visa Logo" className='paymentLogo' />
                      <img src={dcLogo} alt="Visa Logo" className='paymentLogo' />
                  </div>

                </div>
                
              </div>

              <div className='footerContent'>

                <div className='contactArea'>

                  <div className='contactTitle'>
                      <h2>Contact</h2>
                  </div>

                  <div className='contactContent'>
                      
                      <div className='moreContact'>
                        <button onClick={() => setOpenModal(true)} className='button'>Send Menssage</button>
                      </div>

                      <div className='socialLinks'>

                        <a href="https://github.com/Venturini-Sales" target='_blank'><img src={githubLogo} alt="Github"/></a>
                         <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-venturini-sales-462600258/" target='_blank'><img src={linkedinLogo} alt="Linkedin" /></a>
                          <a href="https://api.whatsapp.com/send?phone=5521978915683" target='_blank'><img src={whatsappLogo} alt="Whatsapp" /></a>
                      </div>

                  </div>

                </div>

              </div>

        </div>

        <div className='rights'>
            <div className='allRights'>
                <div className='bar'></div>
                <h2>© 2024 AeroWave. All rights reserved.</h2>
            </div>
        </div>

        <Modal path="C:\Contact Us" isOpen={openModal} onClose={() => setOpenModal(false)} >
           
            <div>
            <form onSubmit={sendEmail} className='form'>

              <div>
                <p className='insertText'>Insert your name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='textInput' type="text" />
              </div>

              <div>
                <p className='insertText'>Insert your email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className='textInput' type="text" />
              </div>

              <div>
                <p className='insertText'>Insert your message</p>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='textInput messageInput' type="text" />
              </div>

              <button className='buttonSend'>Send</button>

            </form>
            </div>
           
        </Modal>

        <ToastContainer/>

      </footer>
    )
  }
  
export default Footer
  
import "./Contact.css"
import Navigation from "../components/Navigation";
import Container from "../components/Container";
import { useState } from "react";
import axios from "axios";

function Contact() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    const[nameIsEmpty, setNameIsEmpty] = useState(false);
    const[emailIsEmpty, setEmailIsEmpty] = useState(false);
    const[phoneIsEmpty, setPhoneIsEmpty] = useState(false);
    const[messageIsEmpty, setMessageIsEmpty] = useState(false);

    const[messageWasSent, setMessageWasSent] = useState(false);

    const sendForm = (e) => {
        e.preventDefault()

        //validating name
        if(name === undefined || name.length === 0) {
            setNameIsEmpty(true);
            return;
        }

        //validating email
        const emailRegex = /^\S+@\S+\.\S+$/;
        if(email === undefined || email.length === 0 || !emailRegex.test(email)) {
            setEmailIsEmpty(true);
            return;
        }

        //validating phone number
        const phoneRegex = /^\d{10}$/;
        if(phone === undefined || phone.length === 0 || !phoneRegex.test(phone)) {
            setPhoneIsEmpty(true);
            return;    
        }

        //validating message
        if(message === undefined || message.length === 0) {
            setMessageIsEmpty(true);
            return;    
        }
        
        const data = {
            name: name,
            email: email,
            phone: phone,
            message: message,
        }

        axios.post("https://react-booking-app.requestcatcher.com/test", data)
        
        setMessageWasSent(true)
    }

    return( 
        <div className="contact">
            <Navigation />
            <Container>
                <h1>Contact</h1>
                {
                    messageWasSent ? (
                        <h1>Thank you for your message.</h1>
                    ) : (
                        <form className="contact-form">
                            <div className="contact-input-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    style={{borderColor: nameIsEmpty ? 'red': 'inherit'}} 
                                    id="name" 
                                    type="text" 
                                    onChange={e => {
                                        setName(e.target.value)
                                        setNameIsEmpty(false)
                                }} 
                            />
                        </div>
                            {nameIsEmpty && (
                                <span style={{color:"red"}}>Name is required</span>
                        )} 

                            <div className="contact-input-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    className={emailIsEmpty ? 'has-error' : ''}
                                    id="email" 
                                    type="text" 
                                    onChange={e => { 
                                        setEmail(e.target.value)
                                        setEmailIsEmpty(false)
                                }}
                            />
                        </div>
                            {emailIsEmpty && (
                                <span style={{color:"red"}}>Email is required</span>
                        )}

                            <div className="contact-input-group">
                                <label htmlFor="phone">Phone</label>
                                <input 
                                    className={phoneIsEmpty ? 'has-error' : ''}
                                    id="phone" 
                                    type="text" 
                                    onChange={e => {
                                        setPhone(e.target.value)
                                        setPhoneIsEmpty(false)
                                }}
                            />
                        </div>
                            {phoneIsEmpty && (
                                <span style={{color:"red"}}>Phone is required</span>
                            )}

                            <div className="contact-input-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" 
                                type="text" onChange={e => {
                                    setMessage(e.target.value)
                                    setMessageIsEmpty(false)
                            }}>    
                            </textarea>
                        </div>
                            {messageIsEmpty && (
                                <span style={{color:"red"}}>Message is required</span>
                            )}

                            <div className="contact-input-group">
                                <button type="submit" onClick={e => sendForm(e)}>Send</button>
                        </div>
                    </form>
                    )
                }
                </Container>
        </div>
    )
}
export default Contact;

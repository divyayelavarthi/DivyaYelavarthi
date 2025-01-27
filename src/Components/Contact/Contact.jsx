import React from 'react'
import './Contact.css'
import emailicon from '../../assets/emailicon.png'
import phoneicon from '../../assets/phoneicon.jpg'
import locationicon from '../../assets/locationicon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6d37dcca-9d25-4fb6-821f-c42ef151b57c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Email Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
   };


    return (
        <div id="contact" className='contact'>
            <div className="contact-title">
                <h1>Connect with me!</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Get in Touch!</h1>
                    <p>I am actively seeking employment opportunities in Full Stack, Frontend, Backend, or Software Engineering roles. If you would like to connect, discuss potential opportunities, or learn more about my work, feel free to reach out!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={emailicon} alt="EmailIcon"/>
                            <p>divyayelavarthi@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={phoneicon} alt="EmailIcon"/>
                            <p>+16825531730</p>
                        </div>
                        <div className="contact-detail">
                            <img src={locationicon} alt="EmailIcon"/>
                            <p>Arlington, Texas, United States</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=" ">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <label htmlFor=''>Your Email</label>
                    <input type="email" placeholder='Enter your email id' name='email'/>
                    <label htmlFor=''>Enter Your Message Here</label>
                    <textarea name="message" rows="2" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
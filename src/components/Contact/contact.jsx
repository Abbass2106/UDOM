import React from 'react'
import './contact.css'
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import locationIcon from '../../assets/location-icon.png'

const contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "43de0584-ba5e-4866-89a6-5a0c5dda3125");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <p>Have questions or need assistance? We’re here to help! 
                Whether you're a prospective student, 
                current learner, alumni, or just curious about our
                 programs and community, don’t hesitate to get in touch.</p>
                 <br/>
        <ul>
            <li><img src={mailIcon}/> samsonabbass@gmail.com</li>
            <li><img src={phoneIcon}/> 06253915553</li>
            <li><img src={phoneIcon}/> 0684375167</li>
            <li><img src={locationIcon}/> Dodoma , TANZANIA</li>
        </ul>
        </div>

        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name:</label>
            <input type="text" name='name' placeholder='enter your name' required/>
            <label>Phone number:</label>
            <input type="tel" name='phone' placeholder='enter phone number '/>
            <label>Enter your message here:</label>
            <textarea placeholder='enter your message here' id='' cols='30' rows='10' required></textarea>

            <br/>
            
            <button type='submit' className='btn dark-btn'>submit</button>
          </form>
          <span>{result}</span>
            
        </div>


      
    </div>
  )
}

export default contact

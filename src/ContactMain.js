import React from 'react'
import { useState } from 'react'
import githublogo from './img/github.png'
import linkedinlogo from './img/linkedin.png'
import callmelogo from './img/call.png'
import emailmelogo from './img/email.png'

function ContactMain() {

    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [formMessage, setFormMessage] = useState('');
    const [formSubject, setFormSubject] = useState('');
    const [formresponsestatus, setFormResponseStatus] = useState('');

    async function submitMessage(headers){
        //const requestOptions = {method:'POST',headers:{'Content-Type': 'application/json'},body: JSON.stringify({name:formName,email:formEmail,phone:formPhone,message:formMessage})};
        //const rtData = await fetch("https://web.johnzvorwadza.uk/portfolio/contact.php", requestOptions);
        //console.log(rtData);
        let formData = new FormData();
        formData.append('name',formName);

    let params = "name="+formName+"&message="+formMessage+"&email="+formEmail+"&phone="+formPhone+"&subject="+formSubject+"&submit=true";

        var request = new XMLHttpRequest();
        request.open('POST','https://web.johnzvorwadza.uk/portfolio/contact.php',true)
        request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        request.onreadystatechange = function(){
            if(request.readyState == 4){
                setFormResponseStatus("Your message has been sent. Thank you!");

                setFormName("");
                setFormEmail("");
                setFormPhone("");
                setFormMessage("");
                setFormSubject("");

            }

        };
        request.send(params)


    }

    const validateForm =(e)=>{
        setFormResponseStatus('')
        e.preventDefault();
        //alert(formMessage);
        //console.log(e);
        if(formName != '' && formMessage != ''){

            submitMessage();

        }else{
            setFormResponseStatus('Fill in all the information!')

        }


    }
  return (
         
            <div className='formContainer'>
            <div >
            <form  onSubmit={validateForm} method="post" role="form" className="php-email-form">
            <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input onChange={(e)=>setFormName(e.target.value)} value={formName} type="text" name="name" className="form-control" id="name" required/>
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input onChange={(e)=>setFormEmail(e.target.value)} value={formEmail} type="email" className="form-control" name="email" id="email" required/>
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Your Phone</label>
                  <input onChange={(e)=>setFormPhone(e.target.value)} value={formPhone}  type="text" className="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div className="form-group">
                <label for="name">Subject</label>
                <input onChange={(e)=>setFormSubject(e.target.value)} value={formSubject} type="text" className="form-control" name="subject" id="subject" required/>
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea onChange={(e)=>setFormMessage(e.target.value)} value={formMessage} className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
            <p className='formresponsestatus'>{formresponsestatus}</p>
              <div className="text-center"><button type="submit">Send Message</button></div>
                
                </form>
                </div>

                
            </div>

  )
}

export default ContactMain
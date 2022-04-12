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
    const [formresponsestatus, setFormResponseStatus] = useState('');

    async function submitMessage(headers){
        //const requestOptions = {method:'POST',headers:{'Content-Type': 'application/json'},body: JSON.stringify({name:formName,email:formEmail,phone:formPhone,message:formMessage})};
        //const rtData = await fetch("https://web.johnzvorwadza.uk/portfolio/contact.php", requestOptions);
        //console.log(rtData);
        let formData = new FormData();
        formData.append('name',formName);

        let params = "name="+formName+"&message="+formMessage+"&email="+formEmail+"&phone="+formPhone+"&submit=true";

        var request = new XMLHttpRequest();
        request.open('POST','https://web.johnzvorwadza.uk/portfolio/contact.php',true)
        request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        request.onreadystatechange = function(){
            if(request.readyState == 4){
                setFormResponseStatus("Your message have been sent, I will respond to you as soon as I can. Thank You");

                setFormName("");
                setFormEmail("");
                setFormPhone("");
                setFormMessage("");
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
    <div>
        <h3>Contact</h3>
        <div className='line'></div>
        <div className='portfolioGrid'>
            <div>
                <ul className='contactdetails'>
                    <li><a href='tel:+447414835835'><img src={callmelogo}/>&nbsp;&nbsp;07414 835 835</a></li>
                    <li><a href='mailto:johnzvorwadza@hotmail.com'><img src={emailmelogo}/>&nbsp;&nbsp;johnzvorwadza@hotmail.com</a></li>
                    <li><a target='blank' href='https://github.com/johnzvorwadza'><img src={githublogo}/>&nbsp;&nbsp;GitHub</a></li>
                    <li><a target='blank' href='https://linkedin.com/in/john-zvorwadza-b00b73235'><img src={linkedinlogo}/>&nbsp;&nbsp;LinkedIn</a></li>
                </ul>
            </div>
            
            <div>
                <span>Or Try Out This Form I Built...</span>
                <p className='formresponsestatus'>{formresponsestatus}</p>
                <form  onSubmit={validateForm} className='contactForm'>
                    <div className='form-name'><input type='text' onChange={(e)=>setFormName(e.target.value)} value={formName} placeholder='name'/> </div>
                    <div className='form-email'><input type='text' onChange={(e)=>setFormEmail(e.target.value)} value={formEmail} placeholder='email'/></div>
                    <div className='form-phone'><input type='text' onChange={(e)=>setFormPhone(e.target.value)} value={formPhone} placeholder='phone'/></div>
                    <div className='form-message'><textarea  onChange={(e)=>setFormMessage(e.target.value)} value={formMessage} placeholder='message'></textarea></div>
                    <div className='form-submit'><input type='submit' value='submit'/></div>
                </form>

            </div>
        </div>

    </div>
  )
}

export default ContactMain
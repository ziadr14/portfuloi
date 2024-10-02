// import React from 'react'
import { useForm , ValidationError } from "@formspree/react";
import {useEffect} from 'react'
import "./Contact.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Contact() {
    
    useEffect(()=> {
        AOS.init({duration: 2000})
    }, [])


    const [state, handleSubmit] = useForm("xvgpladj");
    return (
        <section id="con" className="contact">
            <h1 className="title">
                <span className="icon-envelope"></span>
                Contact us
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                repudiandae repellendus nihil nesciunt minima unde quisquam obcaecati id
                iure beatae.
            </p>
            <div className="flex form">
                <form onSubmit={handleSubmit}>
                    <div   data-aos="fade-up"  className="flex email">
                        <label htmlFor="">Email Address : </label>
                        <input autoComplete ="Off" type="email" name="email" placeholder="Email" required id="email" />
                        <ValidationError
                            prefix="Email"                         
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div  data-aos="fade-up" className="flex mesage">
                        <label htmlFor="">Your Message :</label>
                        <textarea id="message" name="message" placeholder="message">    </textarea>
                        <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        />
                    </div>
                    <button  data-aos="zoom-in" type="submit" disabled={state.submitting} className="submet">
                    {state.submitting ? "Submiting..." : "Submit"}
                        </button>
                </form>
                {state.succeeded && (<p style={{fontSize:"18px" , marginTop: "1.7rem" }} >Thanks for joining!</p>)}
            </div>
        </section>
    );
}

// eslint-disable react/jsx-no-undef
// import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import './Hero.css'

export default function Hero() {
    return (
        <section id='her' className='hero flex'>
            <div className='left-section'>
                <div className='parent-avatar'>
                    <img className='avatar' src="./avatar.png"/>
                    <span className='icon-verified'></span>
                </div>
                <h1 className='title'>
                    <Typewriter
                    
                    options={{
                        autoStart: true ,
                        loop: true ,
                        delay: 50 ,
                        strings: ["Front end developer."]
                    }}
                    
                    />
                
                </h1>
                <p className='subtitle '>
                I’m Ziad, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
                </p>
                <div className='allicon flex'>
                    <div  className='icon icon-twitter'></div>
                    <div  className='icon icon-linkedin'></div>
                    <div  className='icon icon-instagram'></div>
                    <div  className='icon icon-github'></div>
                </div>
            </div>
        </section>
    
    )
}

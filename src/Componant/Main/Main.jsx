// import React from 'react'
import { useState , useEffect } from 'react';
import './Main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Main() {

    useEffect(()=> {
        AOS.init({duration: 2000})
    }, [])




const myProject = [
    {fade : "fade-up",projectTitle : "Lion Page", projectSubTitle:"Responsev Website",  category : "html $ css $ js" , imgPath : "./1.png"},
    {fade : "fade-up",projectTitle : "Abo Ziad Shop", projectSubTitle:"Responsev Website",  category : "react" , imgPath : "./2.png"},
    {fade : "fade-up",projectTitle : "Mano", projectSubTitle:"Responsev Website",  category : "html $ css $ js" , imgPath : "./4.png"},
    {fade : "fade-up",projectTitle : "Nouvil", projectSubTitle:"Responsev Website",  category : "html $ css $ js" , imgPath : "./3.png"},
]


    const [activ , setActiv] = useState(true);
    const [arr , setArr] = useState(myProject)

    const handelButton = (hanBut) => {
        setActiv(hanBut);
        
        const newArr = myProject.filter((item) => {
            return item.category === hanBut
        })

        setArr(newArr);
    }

    return (
    <main id='pro' className='flex'>

        <div data-aos="fade-up">

        <section className='flex left-Section'>
            <button  
            onClick={() => {
                setActiv(true);
                setArr(myProject)
            }}
            className={activ === true? "active" : null }
            >All project 
            </button>

            <button 
            onClick={() => {
                handelButton("html $ css $ js")
            }}

            className= {activ === "html $ css $ js" ? "active" : null}
            > Html $ css $ js </button>
            <button 
            onClick={() => {
                handelButton("react" )
            }}
        
            className= {activ === "react" ? "active" : null}
            >React </button>
        </section>
        </div>

        
        <section className=" flex right-section">
        {arr.map((item) => {
            return (
            <article key={item}  data-aos={item.fade} className="card">
                <img  width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">
                    {item.projectSubTitle}
                </p>

                <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                    </div>

                    <a className="link flex" href="">
                    more
                    <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                    ></span>
                    </a>
                </div>
                </div>
            </article>
            );
        })}
        </section>
    </main>
    );
};

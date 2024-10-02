// import React from 'react'
import { useState , useEffect } from "react";
import "./Header.css";
export default function Header() {
    const [showModel , setShowModel] = useState(false)
    const [them , setThem] = useState(localStorage.getItem("currentMode") ?? "dark")

    useEffect(() => {
        if (them === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    },[them])
return (
    <header className="flex">
        <button onClick={() => {
            setShowModel(true)
        }} className="icon-bars"/>
        <div />
        <nav>
        <ul className="flex ">
                <li>
            <a href="#her">About</a>
                </li>
                <li>
            <a href="#pro">Projects</a>
                </li>
                <li>
            <a href="#con">Contact</a>
                </li>
        </ul>
        </nav>
        
        <button 
        onClick={() => {
            localStorage.setItem("currentMode",them === "dark"? "light" : "dark")
            setThem(localStorage.getItem("currentMode"))

        }}
        > {them === "dark"?(<span className="icon-moon-o"></span>) : (<span className="icon-sun"></span>)}</button>
        
        {showModel && (
        <div className="border fixed">
        <ul className="model">
            <li>
                <button className="icon-close" onClick={() => {
                    setShowModel(false)
                }}/>
            </li>
            <li onClick={() => {
                    setShowModel(false)
                }}>
                <a href="#her">About</a>
            </li>
            <li onClick={() => {
                    setShowModel(false)
                }}>
                <a href="#pro">Projects</a>
            </li>
            <li onClick={() => {
                    setShowModel(false)
                }}>
                <a href="#con">Contact</a>
            </li>
            </ul>
        </div>
        )}
    </header>
);
}

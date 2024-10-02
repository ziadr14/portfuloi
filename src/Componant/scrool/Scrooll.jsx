// import React from 'react'
import { useState,useEffect } from "react";
import "./scrool.css";
export default function Scrool() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const [showButton, setShowButton] = useState(false);

    return (
        <a href="#up" className="scroll">
            <button
                className={showButton === true ? "icon-arrow-up-circle" : null}
            ></button>
        </a>
    );
}

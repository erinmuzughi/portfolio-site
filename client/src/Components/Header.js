import React from "react";
import { Link } from "react-router-dom";


export default function header(){
    return(
        <>
        <a class="header-home" href="/">Home</a>
        <button class="header-homeButton" type="button"></button>

        <a class="header-aboutme" href="/AboutMe">About Me</a>
        <button class="header-aboutmeButton" type="button"></button>
        </>
    )
}
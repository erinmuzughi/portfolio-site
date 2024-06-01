import React from "react";
import { useState } from "react";

export default function updateExperienceForm(){

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleExperiencechange = (e) => {
        //update the experienceData file with new entry upon  submission
      };
    

  return(
    <>
    <form onSubmit={handleSubmit}>
        <h2>Update Your Experience</h2>
        <input type="text" value= {newExperience} onChange={handleExperiencechange}></input>


    </form>
    </>
  )
}

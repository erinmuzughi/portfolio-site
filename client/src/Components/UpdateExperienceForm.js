import React from "react";
import { useState } from "react";

export default function updateExperienceForm(){

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleExperienceChange = (e) => {
        //update the experienceData file with new entry upon  submission
      };
    

  return(
    <>
    <form onSubmit={handleSubmit}>
        <h2>Update Your Experience</h2>
        <input type="text"  value= "Job Title" onChange={handleExperienceChange}></input>
        <input type="text"  value= "Company" onChange={handleExperienceChange}></input>
        <input type="text"  value= "Start Date" onChange={handleExperienceChange}></input>
        <input type="text"  value= "End Date" onChange={handleExperienceChange}></input>



    </form>
    </>
  )
}

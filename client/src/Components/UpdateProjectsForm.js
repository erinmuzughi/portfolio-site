import React from "react";

export default function updateProjetsForm(){
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleProjectsChange = (e) => {
        //update the projectsData file with new entry upon  submission
      };
    

  return(
    <>
    <form onSubmit={handleSubmit}>
        <h2>Update Your Experience</h2>
        <input type="text" value= {newExperience} onChange={handleProjectsChange}></input>


    </form>
    </>
  )
}
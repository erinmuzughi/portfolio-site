import React from "react";
import { projects } from "../Helpers/projectData";



export default function updateProjetsForm(){
    const handleSubmit = (e) => {
        e.preventDefault();

        const newProject= {
          title: " ",
          subtitle: " ",
          image: "",
          altText: "",
          hyperLink: ""
        }

        projects.push({newProject})
    };

    // const handleProjectsChange = (e) => {
    //     //update the projectsData file with new entry upon  submission
    //     projectData.push({newExperience})
    //   };
    

  return(
    <>
    <form onSubmit={handleSubmit}>
        <h2>Update Your Projects</h2>
        <input type="text" value= {Title}></input>
        <input type="text" value= {Subtitle}></input>
        <input type="text" value= {altText}></input>
        <input type="text" value= {hyperLink}></input>
        <button type="submit">Save</button>

    </form>
    </>
  )
}
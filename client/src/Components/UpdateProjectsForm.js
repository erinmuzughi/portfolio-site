import React from "react";
import { projects } from "../Helpers/projectData";
import { useState } from "react";



export default function UpdateProjetsForm(){

  const [title, setTitle]= useState('');
    const [subtitle, setSubtitle]= useState('');
    const [image, setImage]= useState('');
    const [altText, setAlttext]= useState('');
    const [hyperLink, setHyperLink]= useState('');


   const handleTitleChange= (e) => {
    setTitle(e.target.value);
   };

    const handleSubtitleChange= (e) => {
      setSubtitle(e.target.value);
   };
   
   const handleImageChange= (e) => {
    setImage(e.target.value);
 };

 const handleAltTextChange= (e) => {
  setAlttext(e.target.value);
};

const handleHyperLinkChange= (e) => {
  setHyperLink(e.target.value);
};

const handleSubmit = (e) => {

  e.preventDefault();

  const project= {title, subtitle, image, altText, hyperLink};

  console.log(project);

  const newProject= {
    title: project.title,
    subtitle: project.subtitle, 
    image: project.image, 
    altText: project.altText, 
    hyperLink: project.hyperLink
  }

  projects.push(newProject);

  console.log(projects)

}

  return(
    <>
    <form onSubmit={handleSubmit}>
        <h2>Update Your Projects</h2>
        <input type="text" value= {title} onChange={handleTitleChange} placeholder="Title"></input>
        <input type="text" value= {subtitle} onChange={handleSubtitleChange} placeholder="Subtitle"></input>
        <input type="text" value= {image} onChange={handleImageChange} placeholder="Image"></input>
        <input type="text" value= {altText} onChange={handleAltTextChange} placeholder="AltText"></input>
        <input type="text" value= {hyperLink} onChange={handleHyperLinkChange} placeholder="HyperLink"></input>
        <button type="submit" >Save</button>

    </form>
    </>
  )
}
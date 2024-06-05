import React from "react";
import { projects } from "../Helpers/projectData";
import { useState } from "react";



export default function UpdateProjetsForm(){

  const [title, setTitle]= useState('');
    const [subtitle, setSubtitle]= useState('');
    const [image, setImage]= useState('');
    const [altText, setAltText]= useState(''); //fixed a typo, this was Alttext instead of AltText throughout
    const [hyperlink, setHyperlink]= useState(''); //fixed 'hyperLink' and HyperLink to hyperlink and Hyperlink thorughout for consistency with the data file -- hyperlink is one word not two


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
  setAltText(e.target.value);
};

const handleHyperlinkChange= (e) => {
  setHyperlink(e.target.value);
};

const handleSubmit = (e) => {

  e.preventDefault();

  const project= {title, subtitle, image, altText, hyperlink};

  console.log(project);
  console.log('Updated projects array:', projects); //added this console log in two places, so it is adding it to the array of projects, the problem is we haven't created persistent data yet so it's wiped every time we restart the app and doesn't actually get added to the .js file itself. We need to make the data persistent, which is where the database comes in. So we actually 

  const newProject= {
    title: project.title,
    subtitle: project.subtitle, 
    image: project.image, 
    altText: project.altText, 
    hyperlink: project.hyperlink
  }

  projects.push(newProject);

  console.log(projects);
  console.log('Updated projects array:', projects);

  const updatedProjects = [...projects, newProject];

  // Save to local storage
  localStorage.setItem('projects', JSON.stringify(updatedProjects));

  console.log('New project added:', newProject);
  console.log('Updated projects array:', updatedProjects);

}

  return(
    <>
    <form onSubmit={handleSubmit}>
        <h2>Update Your Projects</h2>
        <input type="text" value= {title} onChange={handleTitleChange} placeholder="Title"></input>
        <input type="text" value= {subtitle} onChange={handleSubtitleChange} placeholder="Subtitle"></input>
        <input type="text" value= {image} onChange={handleImageChange} placeholder="Image"></input>
        <input type="text" value= {altText} onChange={handleAltTextChange} placeholder="AltText"></input>
        <input type="text" value= {hyperlink} onChange={handleHyperlinkChange} placeholder="HyperLink"></input>
        <button type="submit" >Save</button>

    </form>
    </>
  )
}
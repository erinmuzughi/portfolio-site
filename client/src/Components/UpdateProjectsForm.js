import React from "react";
import { projects } from "../Helpers/projectData";



export default function updateProjetsForm(){
    const handleSubmit = (e) => {
        e.preventDefault();

        const newProject= new projects ({title}, {subtitle}, {image}, {altText}, {HyperLink})

        projects.push({newProject})
    };
    
    const [title, setTitle]= useState('');
    const [subtitle, setSubtitle]= useState('');
    const [image, setImage]= useState('');
    const [altText, setAlttext]= useState('');
    const [hyperLink, setHyperlink]= useState('');
    
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
  setHyperlink(e.target.value);
};

  return(
    <>
    <form onSubmit={handleSubmit}>
        <h2>Update Your Projects</h2>
        <input type="text" value= {title} onChange={handleTitleChange}></input>
        <input type="text" value= {subtitle} onChange={handleSubtitleChange}></input>
        <image type="text" value= {image} onChange={handleImageChange}></image>
        <input type="text" value= {altText} onChange={handleAltTextChange}></input>
        <input type="text" value= {hyperLink} onChange={handleHyperLinkChange}></input>
        <button type="submit">Save</button>

    </form>
    </>
  )
}
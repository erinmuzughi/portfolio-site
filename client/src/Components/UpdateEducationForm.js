import React from "react";

export default function updateEducationForm(){
  const handleSubmit = (e) => {
    e.preventDefault();

    //educationData.push({newProject})

    
};

const handleAboutMeChange = (e) => {
    //update the experienceData file with new entry upon  submission
  };


return(
<>
<form onSubmit={handleSubmit}>
    <h2>Update Your Education</h2>
    <input type="text"  value= "educationText" onChange={handleAboutMeChange}></input>


</form>
</>
)
}

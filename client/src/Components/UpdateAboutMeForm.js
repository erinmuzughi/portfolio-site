import React from "react";

export default function updateAboutMeForm(){
  const handleSubmit = (e) => {
    e.preventDefault();
};

const handleAboutMeChange = (e) => {
    //update the experienceData file with new entry upon  submission
  };


return(
<>
<form onSubmit={handleSubmit}>
    <h2>Update Your Experience</h2>
    <input type="text" value= {newExperience} onChange={handleAboutMeChange}></input>


</form>
</>
)
}

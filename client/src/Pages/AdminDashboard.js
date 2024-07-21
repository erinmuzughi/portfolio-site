import React from "react";
import UpdateExperienceForm from "../Components/UpdateExperienceForm";
import UpdateProjetsForm from "../Components/UpdateProjectsForm";
import UpdateEducationForm from "../Components/UpdateEducationForm";



export default function adminDashboard(){
    return(
        <>
        <UpdateExperienceForm/>
        <UpdateProjetsForm/>
        <UpdateEducationForm/>
    
        </>
    )
}
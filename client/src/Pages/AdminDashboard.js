import React from "react";
import UpdateExperienceForm from "../Components/UpdateExperienceForm";
import UpdateProjetsForm from "../Components/UpdateExperienceForm";
import UpdateAboutMeForm from "../Components/UpdateAboutMeForm";


export default function adminDashboard(){
    return(
        <>
        <UpdateExperienceForm/>
        <UpdateProjetsForm/>
        <UpdateAboutMeForm/>
        </>
    )
}
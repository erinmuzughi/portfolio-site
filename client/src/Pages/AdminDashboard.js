import React from "react";
import Header from "../Components/Header";
import UpdateExperienceForm from "../Components/UpdateExperienceForm";
import UpdateProjetsForm from "../Components/UpdateExperienceForm";



export default function adminDashboard(){
    return(
        <>
        <Header/>
        <UpdateExperienceForm/>
        <UpdateProjetsForm/>
    
        </>
    )
}
package com.example.portfoliosite.controllers;

import com.example.portfoliosite.data.EducationRepository;
import com.example.portfoliosite.data.ExperienceRepository;
import com.example.portfoliosite.data.ProjectRepository;
import com.example.portfoliosite.models.Education;
import com.example.portfoliosite.models.Experience;
import com.example.portfoliosite.models.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping("adminDashboard")
public class AdminDashboardController {

    @Autowired
    private EducationRepository educationRepository;

    private Education education;

    private ExperienceRepository experienceRepository;

    private Experience experience;

    private ProjectRepository projectRepository;

    private Project project;

   // Education Section
@PostMapping("addEducation")
    public Education addEducation(@RequestBody EducationRepository educationRepository) {
    return educationRepository.save(education);
}

@GetMapping ("/education{id}")
public Optional<Education> searchEducation(@PathVariable int id) {
    return educationRepository.findById(id);
}



// Experience Section
    @PostMapping("addExperience")

    public Experience addExperience (@RequestBody ExperienceRepository experienceRepository) {
    return experienceRepository.save(experience);
    }

    @GetMapping ("/experience{id}")
    public Optional<Experience> searchExperience(@PathVariable int id) {
    return experienceRepository.findById(id);
    }


// Project Section
    @PostMapping("addProject")

    public Project addProject (@RequestBody ProjectRepository projectRepository) {
    return projectRepository.save(project);
    }

    @GetMapping("/project{id}")
    public Optional<Project> searchProject(@PathVariable int id) {
    return projectRepository.findById(id);
    }

}

package com.example.portfoliosite.controllers;

import com.example.portfoliosite.data.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("adminDashboard")
public class AdminDashboardController {

    @Autowired
    private EducationRepository educationRepository;

}

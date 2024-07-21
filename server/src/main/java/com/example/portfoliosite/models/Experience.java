package com.example.portfoliosite.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;


import java.util.Objects;

@Entity
public class Experience {

    @Id
    @GeneratedValue
    private int id;

@NotNull(message = "Please enter a job title")
    private String jobTitle;
    @NotNull(message = "Please enter a company")
    private String company;
    @NotNull(message = "Please enter a start date")
    private String startDate;
    @NotNull(message = "Please enter a end date, or put 'present' if still employed")

    private String endDate;
    @NotNull(message = "Please enter a description of job duties")
    private String description;

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public Experience(String jobTitle, String company, String startDate, String endDate, String description) {
        this.jobTitle=jobTitle;
        this.company=company;
        this.startDate=startDate;
        this.endDate=endDate;
        this.description=description;
    }

    public Experience(){}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Experience that)) return false;
        return getId() == that.getId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}

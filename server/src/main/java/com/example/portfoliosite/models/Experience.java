package com.example.portfoliosite.models;

import jakarta.persistence.Entity;

import java.util.Objects;

@Entity
public class Experience {

    private int id;

    private static int nextId =1;


    private String jobTitle;

    private String company;
    private String startDate;
    private String endDate;
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
        this.id= nextId;
        nextId++;
    }

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

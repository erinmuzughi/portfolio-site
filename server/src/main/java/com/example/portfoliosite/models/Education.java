package com.example.portfoliosite.models;

public class Education {

    private String title;
    private String company;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public Education(String title, String company) {
        this.title = title;
        this.company = company;
    }
}

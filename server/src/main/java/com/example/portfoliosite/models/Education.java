package com.example.portfoliosite.models;

import jakarta.persistence.Entity;

import java.util.Objects;

@Entity
public class Education {
    private int id;

    private static int nextId;

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

    public int getId() {
        return id;
    }

    public Education(String title, String company) {
        this.title = title;
        this.company = company;
        this.id=nextId;
        nextId++;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Education education)) return false;
        return getId() == education.getId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}

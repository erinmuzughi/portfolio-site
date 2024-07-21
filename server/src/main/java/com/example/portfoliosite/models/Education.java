package com.example.portfoliosite.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import org.springframework.lang.NonNull;

import java.util.Objects;

@Entity
public class Education {
    @Id
    @GeneratedValue
    private int id;

@NotNull(message = "Please enter a title")
    private String title;
@NotNull(message= "Please enter a company")
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
    }

    public Education(){}

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

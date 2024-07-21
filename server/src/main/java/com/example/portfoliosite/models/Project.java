package com.example.portfoliosite.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

import java.util.Objects;

@Entity
public class Project {

    @Id
    @GeneratedValue
    private int id;

    @NotNull(message = "Please enter a title")
    private String title;
    @NotNull(message = "Please enter a subtitle")
    private String subtitle;
    @NotNull(message = "Please enter an image")
    private String image;
    @NotNull(message = "Please enter alt text for the image")
    private String altText;
    @NotNull(message = "Please enter a hyperlink")
    private String hyperlink;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public void setSubtitle(String subtitle) {
        this.subtitle = subtitle;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAltText() {
        return altText;
    }

    public void setAltText(String altText) {
        this.altText = altText;
    }

    public String getHyperlink() {
        return hyperlink;
    }

    public void setHyperlink(String hyperlink) {
        this.hyperlink = hyperlink;
    }

    public int getId() {
        return id;
    }

    public Project(String title, String subtitle, String image, String altText, String hyperlink) {
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.altText = altText;
        this.hyperlink = hyperlink;

    }

    public Project (){}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Project project)) return false;
        return getId() == project.getId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}

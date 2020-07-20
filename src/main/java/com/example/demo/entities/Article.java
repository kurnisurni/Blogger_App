package com.example.demo.entities;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "articles")

public class Article {
    @Id   // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)      // Auto increment
    private int id;
    private String title;
    private String content;
    private Long published;

    public Article() {
    }

    public Article(int id, String title, String content, Long published) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.published = Instant.now().getEpochSecond();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getPublished() {
        return published;
    }

    public void setPublished(Long published) {
        this.published = published;
    }
}

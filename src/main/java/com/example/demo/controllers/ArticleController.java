package com.example.demo.controllers;

import com.example.demo.entities.Article;
import com.example.demo.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@Controller
@CrossOrigin

@RequestMapping("/rest")
public class ArticleController {

    @Autowired
    ArticleService articleService;

    // Get all articles
    @GetMapping("/rest/articles")
    public List<Article> getAllArticles() {
        return articleService.findAllArticles();
    }

    //Get specific article by id
    @GetMapping("/rest/articles/{id}")
    public Optional<Article> getOneArticle(@PathVariable int id) {
        return articleService.findOneArticle(id);
    }

    //Add a new article
    @PostMapping("/rest/articles")
    public Article createNewArticle(@RequestBody Article article) {
        return articleService.createNewArticle(article);
    }

    // Update an article
    @PatchMapping("/rest/articles/{id}")
    public Article updateArticle(@RequestBody Article article) {
        return articleService.
    }

}


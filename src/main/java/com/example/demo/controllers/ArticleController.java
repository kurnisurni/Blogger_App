package com.example.demo.controllers;

import com.example.demo.entities.Article;
import com.example.demo.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//@Controller
//@CrossOrigin

//@RequestMapping("/rest")
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

    /*
    //Get specific article by title -10 mar javaspring med sql code along 1
    @GetMapping("/rest/articles/title/{title}")
    public List<Article> getArticlesByTitle(@PathVariable String title) {
        return articleService.findByTitle(title);
    } */



}


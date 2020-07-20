package com.example.demo.services;

import com.example.demo.entities.Article;
import com.example.demo.repositories.ArticleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {

    @Autowired
    ArticleRepo articleRepo;

    public List<Article> findAllArticles() {
        return (List<Article>) articleRepo.findAll();
    }

    public Optional<Article> findOneArticle(int id) {
        return articleRepo.findById(id);
    }

    public Article createNewArticle(Article newArticle) {
        return articleRepo.save(newArticle);
    }

    public Article
}

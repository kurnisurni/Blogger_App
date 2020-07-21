package com.example.demo.repositories;

import com.example.demo.entities.Article;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepo extends CrudRepository<Article, Integer> { // CrudRepository wants to know which entity belongs to this repo, and what type the Primary Key is.
    //public List<Article> findAllByTitlesIgnoreCase(String title); // SELECT * FROM articles WHERE upper(titles) = upper(title)
}

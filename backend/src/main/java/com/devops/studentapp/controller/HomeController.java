package com.devops.studentapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:3001")
@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to Student App!";
    }
}
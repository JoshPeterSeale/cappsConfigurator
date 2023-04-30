package com.capps.cappsconfigurator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController(value = "/")
public class HomeController {

    @Autowired
    public HomeController(){
    }

    @GetMapping
    public String getHome(){
        return "index";
    }
}

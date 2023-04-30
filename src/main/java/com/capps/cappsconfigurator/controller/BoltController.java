package com.capps.cappsconfigurator.controller;

import com.capps.cappsconfigurator.service.BoltService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/bolt-configuration")
public class BoltController {
    private final BoltService boltService;

    @Autowired
    public BoltController(BoltService boltService) { this.boltService = boltService; }

    @GetMapping(value = "/length")
    public List getLength() {
        return boltService.getLength();
    }

    @GetMapping(value = "/diameter")
    public List getDiameter() {
        return boltService.getDiameter();
    }

    @GetMapping(value = "/nutType")
    public List getNutType() {
        return boltService.getNutType();
    }

    @GetMapping(value = "/pitch")
    public List getPitch() {
        return boltService.getPitch();
    }

    @GetMapping(value = "/configuration")
    public List getConfiguration() {
        return boltService.getConfiguration();
    }
}

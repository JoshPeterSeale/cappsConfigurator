package com.capps.cappsconfigurator.controller;

import com.capps.cappsconfigurator.service.BoltServiceV2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "api/v2/bolt-configuration")
public class BoltControllerV2 {
    private final BoltServiceV2 boltService;

    @Autowired
    public BoltControllerV2(BoltServiceV2 boltService) { this.boltService = boltService; }

    @GetMapping(value = "/length")
    @ResponseBody
    public String getLength() {
        return boltService.getLength();
    }

    @GetMapping(value = "/diameter")
    @ResponseBody
    public String getDiameter(@RequestParam(defaultValue = "1000") String length) {
        return boltService.getDiameter(length);
    }

    @GetMapping(value = "/nutType")
    @ResponseBody
    public String getNutType() {
        return boltService.getNutType();
    }

    @GetMapping(value = "/pitch")
    @ResponseBody
    public String getPitch(@RequestParam(defaultValue = "1000") String diameter) {
        return boltService.getPitch(diameter);
    }

}

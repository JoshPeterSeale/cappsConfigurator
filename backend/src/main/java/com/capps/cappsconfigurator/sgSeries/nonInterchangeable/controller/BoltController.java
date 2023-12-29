package com.capps.cappsconfigurator.sgSeries.nonInterchangeable.controller;

import com.capps.cappsconfigurator.sgSeries.nonInterchangeable.model.*;
import com.capps.cappsconfigurator.sgSeries.nonInterchangeable.service.BoltService;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Controller
@CrossOrigin("http://localhost:3000")
public class BoltController {

    private final BoltService boltService;

    public BoltController(BoltService boltService) {
        this.boltService = boltService;
    }

    @QueryMapping
    public List<BlockType> getBlockTypesA() {
        return boltService.getBlockTypeA();
    }

    @QueryMapping
    public List<Integer> getDimensions() {
        return boltService.getDimensions();
    }

    @QueryMapping
    public List<BlockType> getBlockTypesB() {
        return boltService.getBlockTypeB();
    }

    @QueryMapping
    public List<MountType> getMountTypes() {
        return boltService.getMountTypes();
    }

    @QueryMapping
    public List<SpecialTreatment> getSpecialTreatmentTypes() {
        return boltService.getSpecialTreatmentTypes();
    }

    @QueryMapping
    public List<Accessory> getAccessories() {
        return boltService.getAccessories();
    }

    @QueryMapping
    public List<Preload> getPreloads() {
        return boltService.getPreloads();
    }

    @QueryMapping
    public List<Accuracy> getAccuracies() {
        return boltService.getAccuracies();
    }

    @QueryMapping
    public BoltConfigurationOutput getBoltConfiguration(@Argument BoltParameters boltParameters) {
        String productCode = boltService.getProductCode(boltParameters);
        double price = boltService.getPrice(boltParameters);
        return new BoltConfigurationOutput(productCode, price);
    }

}

package com.capps.cappsconfigurator.controller;

import com.capps.cappsconfigurator.model.Bolts.Bolt;
import com.capps.cappsconfigurator.model.Bolts.CreateBoltInput;
import com.capps.cappsconfigurator.service.BoltServiceV2;
import com.capps.cappsconfigurator.service.BoltServiceV3;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.hateoas.InputType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.awt.print.Book;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
public class BoltControllerV3 {

    private final BoltServiceV3 boltService;

    @Autowired
    public BoltControllerV3(BoltServiceV3 boltService) {
        this.boltService = boltService;
    }

    @QueryMapping
    public List lengthsV3() {
        //return "Hello World";
        return boltService.getLength();
    }

    @QueryMapping
    public List nutTypesV3() {
        return boltService.getNutType();
    }

    @QueryMapping
    public List diametersV3() {
        return boltService.getDiameter("100");
    }

    @QueryMapping
    public List pitchV3() {
        return boltService.getDiameter("100");
    }

    @QueryMapping
    public List boltV3() {
        return boltService.getBolts();
    }

    @QueryMapping
    public List boltByMaterial(@Argument String nutMaterial) {
        List<Bolt> allBolts = boltService.getBolts();
        List boltList = allBolts.stream().filter(bolt -> bolt.nutMaterial.equalsIgnoreCase(nutMaterial)).collect(Collectors.toList());
        return boltList;
    }

    @QueryMapping
    public List boltByDiameterAndLength(@Argument int diameter, @Argument int length) {
        List<Bolt> allBolts = boltService.getBolts();
        List boltList = allBolts.stream().filter(bolt -> bolt.diameter == diameter).filter(bolt -> bolt.length == length).collect(Collectors.toList());
        return boltList;
    }

    @QueryMapping
    public List boltByParameters(@Argument Optional<Integer> diameter, @Argument Optional<Integer> length, @Argument Optional<Integer> pitch, @Argument Optional<String> nutMaterial) {
        List<Bolt> allBolts = boltService.getBolts();
        List listBolts = allBolts.stream().filter(bolt -> Optional.of(bolt.diameter).equals(diameter) || diameter.isEmpty()).
                filter(bolt -> Optional.of(bolt.length).equals(length) || length.isEmpty()).
                filter(bolt -> Optional.of(bolt.pitch).equals(pitch) || pitch.isEmpty()).
                filter(bolt -> Optional.of(bolt.nutMaterial).equals(nutMaterial) || nutMaterial.isEmpty()).
                collect(Collectors.toList());
        return listBolts;
    }
    //, @Argument Optional<Integer> length, @Argument Optional<Integer> pitch, @Argument Optional<String> nutMaterial

    @MutationMapping
    public List createBolt(@Argument CreateBoltInput boltInput) {
        Bolt b = new Bolt(boltInput.diameter, boltInput.length, boltInput.nutMaterial, boltInput.pitch);
        List allBolts = new ArrayList(Arrays.asList(b));
        return allBolts;
    }

}
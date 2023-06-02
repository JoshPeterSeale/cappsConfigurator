package com.capps.cappsconfigurator.service;

import com.capps.cappsconfigurator.model.Bolts.Bolt;
import com.google.gson.Gson;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BoltServiceV3 {

    public static List getDiameter(String length) {
        Integer inputLength = Integer.parseInt(length);
        List<Integer> allDiameters = new ArrayList(Arrays.asList(15, 32, 40, 55));
        List<Integer> availableDiameters = allDiameters.stream().filter(d -> d < inputLength).collect(Collectors.toList());
        return availableDiameters;
    }

    public List getLength() {
        List<Integer> availableLengths = new ArrayList();
        for (int i=100; i <=400; i = i+10) {;
            availableLengths.add(i);
        }
        return availableLengths;
    }

    public List getNutType() {
        String nutCopper = "Copper";
        String nutSteel = "Steel";
        List availableMaterials = new ArrayList(Arrays.asList(nutCopper, nutSteel));
        return availableMaterials;
    }

    public List getPitch(String diameter) {
        Integer inputDiameter = Integer.parseInt(diameter);
        List<Integer> allPitches = new ArrayList(Arrays.asList(5, 10, 15));
        List<Integer> availablePitches = allPitches.stream().filter(p->p<inputDiameter).collect(Collectors.toList());
        return availablePitches;

    }

    public List<Bolt> getBolts() {
        Bolt bolt1 = new Bolt(50, 100, "Copper", 10);
        Bolt bolt2 = new Bolt(50, 100, "Steel", 10);
        Bolt bolt3 = new Bolt(55, 105, "Copper", 10);

        List<Bolt> allBolts = new ArrayList<Bolt>(Arrays.asList(bolt1, bolt2, bolt3));
        return allBolts;
    }

    public List getConfiguration(String length, String diameter){
        return new ArrayList(Arrays.asList(
                getDiameter(length),
                getLength(),
                getNutType(),
                getPitch(diameter)
        ));
    }
}

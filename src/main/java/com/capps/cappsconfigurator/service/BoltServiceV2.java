package com.capps.cappsconfigurator.service;

import com.google.gson.Gson;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BoltServiceV2 {

    public static String getDiameter(String length) {
        Integer inputLength = Integer.parseInt(length);
        List<Integer> allDiameters = new ArrayList(Arrays.asList(15, 32, 40, 55));
        List<Integer> availableDiameters = allDiameters.stream().filter(d -> d < inputLength).collect(Collectors.toList());
        Gson gson = new Gson();
        String jsonDiameters = gson.toJson(availableDiameters);
        return jsonDiameters;
    }

    public String getLength() {
        List<Integer> availableLengths = new ArrayList();
        for (int i=100; i <=400; i = i+10) {;
            availableLengths.add(i);
        }

        Gson gson = new Gson();
        String jsonLengths = gson.toJson(availableLengths);
        return jsonLengths;
    }

    public String getNutType() {
        String nutCopper = "Copper";
        String nutSteel = "Steel";
        List availableMaterials = new ArrayList(Arrays.asList(nutCopper, nutSteel));
        Gson gson = new Gson();
        String jsonNutType= gson.toJson(availableMaterials);
        return jsonNutType;
    }

    public String getPitch(String diameter) {
        Integer inputDiameter = Integer.parseInt(diameter);
        List<Integer> allPitches = new ArrayList(Arrays.asList(5, 10, 15));
        List<Integer> availablePitches = allPitches.stream().filter(p->p<inputDiameter).collect(Collectors.toList());
        Gson gson = new Gson();
        String jsonPitch = gson.toJson(availablePitches);
        return jsonPitch;

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

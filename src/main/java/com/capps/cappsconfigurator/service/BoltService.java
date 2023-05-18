package com.capps.cappsconfigurator.service;

import com.google.gson.Gson;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class BoltService {

    public static String getDiameter() {
        int diameter15 = 15;
        int diameter32 = 32;
        int diameter40 = 40;
        int diameter55 = 55;
        List availableDiameters = new ArrayList(Arrays.asList(diameter15, diameter32, diameter40, diameter55));
        Gson gson = new Gson();
        String jsonDiameters = gson.toJson(availableDiameters);
        return jsonDiameters;
    }

    public String getLength() {
        List availableLengths = new ArrayList();
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

    public String getPitch() {
        int pitch5 = 5;
        int pitch10 = 10;
        int pitch15 = 15;
        List availablePitches = new ArrayList(Arrays.asList(pitch5, pitch10, pitch15));
        Gson gson = new Gson();
        String jsonPitch = gson.toJson(availablePitches);
        return jsonPitch;

    }

    public List getConfiguration(){
        return new ArrayList(Arrays.asList(
                getDiameter(),
                getLength(),
                getNutType(),
                getPitch()
        ));
    }
}

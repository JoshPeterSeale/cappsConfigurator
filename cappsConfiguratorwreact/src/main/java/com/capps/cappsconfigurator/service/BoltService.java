package com.capps.cappsconfigurator.service;

import com.capps.cappsconfigurator.model.Bolts.AvailableDiameters;
import com.capps.cappsconfigurator.model.Bolts.AvailableLengths;
import com.capps.cappsconfigurator.model.Bolts.AvailableNutTypes;
import com.capps.cappsconfigurator.model.Bolts.AvailablePitch;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class BoltService {

    public static List getDiameter() {
        AvailableDiameters diameter15 = new AvailableDiameters(15);
        AvailableDiameters diameter32 = new AvailableDiameters(32);
        AvailableDiameters diameter40 = new AvailableDiameters(40);
        AvailableDiameters diameter55 = new AvailableDiameters(55);
        List availableDiameters = new ArrayList(Arrays.asList(diameter15, diameter32, diameter40, diameter55));
        return availableDiameters;
    }

    public List getLength() {
        List availableLengths = new ArrayList();
        for (int i=100; i <=400; i = i+10) {
            AvailableLengths length = new AvailableLengths(i);
            availableLengths.add(length);
        }
        //List availableLengths = new ArrayList(Arrays.asList(length100, length400));
        return availableLengths;
    }

    public List getNutType() {
        AvailableNutTypes nutCopper = new AvailableNutTypes("Copper");
        AvailableNutTypes nutSteel = new AvailableNutTypes("Steel");
        List availableMaterials = new ArrayList(Arrays.asList(nutCopper, nutSteel));
        return availableMaterials;
    }

    public List getPitch() {
        AvailablePitch pitch5 = new AvailablePitch(5);
        AvailablePitch pitch10 = new AvailablePitch(10);
        AvailablePitch pitch15 = new AvailablePitch(15);
        List availablePitches = new ArrayList(Arrays.asList(pitch5, pitch10, pitch15));
        return availablePitches;

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

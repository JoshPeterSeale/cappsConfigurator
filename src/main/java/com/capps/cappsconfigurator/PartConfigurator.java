package com.capps.cappsconfigurator;

import com.capps.cappsconfigurator.model.Bolts.Bolt;

import java.util.List;

public class PartConfigurator {


    public static double calculateBolt(Bolt bolt){
        double multiplier = 0.5;
        double value = (bolt.diameter + bolt.length) * multiplier;
        return value;
    }

    public static String partCode(Bolt bolt){
        List<String> list = bolt.toList();
        String partCode="bs";
        for(String str : list){
            partCode += "-" +str;
        }
        return partCode;
    }
}

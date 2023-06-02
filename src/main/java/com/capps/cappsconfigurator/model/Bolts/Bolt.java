package com.capps.cappsconfigurator.model.Bolts;

import lombok.AllArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@ToString
@AllArgsConstructor

public class Bolt {
    public int diameter; // 15,32,40,55
    public int length; // 100 - 400 increments of 10mm
    public String nutMaterial; // copper, steel
    public int pitch; // how long it moves per rotation- (5, 10, 15), (5,10,15,20,32), (5,10,15,20,40), (5,10,15,20,32,55)

    public List<String> toList(){
        // create a list for use with the partConfigurator
        String diameter = String.valueOf(this.diameter);
        String length = String.valueOf(this.length);
        String pitch = String.valueOf(this.pitch);
        String nut = String.valueOf(this.nutMaterial);

        List<String> list = new ArrayList<String>(Arrays.asList(diameter, length, pitch, nut));
        return list;
    }
}



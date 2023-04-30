package com.capps.cappsconfigurator;

import com.capps.cappsconfigurator.model.Bolts.*;

public class Main {
    public static void main(String[] args) {
        String lineBreak = System.getProperty("line.separator");
        Bolt firstBolt = new Bolt(15, 100, "Copper", 10);
        System.out.println("Bolt configuration: " + lineBreak + firstBolt.toString() + lineBreak);
        String partNumber = PartConfigurator.partCode(firstBolt);
        System.out.println("Part Number: " + lineBreak + partNumber + lineBreak);
        double partPrice = PartConfigurator.calculateBolt(firstBolt);
        System.out.println("Part Price: " + lineBreak + partPrice + lineBreak);
    }
}
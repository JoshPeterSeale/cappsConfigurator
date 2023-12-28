package com.capps.cappsconfigurator.sgSeries.nonInterchangeable.service;

import com.capps.cappsconfigurator.sgSeries.nonInterchangeable.model.*;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class BoltService {

    public List<BlockType> getBlockTypeA(){
        BlockType blockH = new BlockType("H", "High Profile");
        BlockType blockS = new BlockType("S", "Low Profile");
        return Arrays.asList(blockH, blockS);
    }

    public List<Integer> getDimensions() {
        return Arrays.asList(15, 20, 25, 30, 35, 45);
    }

    public List<BlockType> getBlockTypeB(){
        BlockType blockA = new BlockType("A", "Flange type");
        BlockType blockB = new BlockType("B", "Square block");
        BlockType blockAL = new BlockType("AL", "Extended flange type");
        BlockType blockBL = new BlockType("BL", "Extended square block");
        return Arrays.asList(blockA, blockB, blockAL, blockBL);
    }

    public List<MountType> getMountTypes() {
        MountType mountR = new MountType("R", "From above");
        MountType mountK = new MountType("K", "From below");
        return Arrays.asList(mountR, mountK);
    }

    public List<SpecialTreatment> getSpecialTreatmentTypes(){
        SpecialTreatment treatmentTypeE = new SpecialTreatment("E", "None: standard rail");
        return Arrays.asList(treatmentTypeE);
    }

    public List<Accessory> getAccessories() {
        Accessory accessoryS = new Accessory("S", "Screws cap");
        Accessory accessoryG = new Accessory("S", "Steel cover strip");
        Accessory accessoryNone = new Accessory("", "None: standard");
        return Arrays.asList(accessoryS, accessoryG, accessoryNone);
    }

    public List<Preload> getPreloads() {
        Preload preloadZ0 = new Preload("Z0", "No preload",
                "Fixed load direction with low impact and low precision");
        Preload preloadZ1 = new Preload("Z1", "Middle preload",
                "Light load and high precision");
        Preload preloadZ2 = new Preload("Z2", "Heavy preload",
                "Requirements for rigidity, vibration and impact");
        return Arrays.asList(preloadZ0, preloadZ1, preloadZ2);
    }

    public List<Accuracy> getAccuracies() {
        Accuracy accuracyN = new Accuracy("N", "Normal");
        Accuracy accuracyH = new Accuracy("H", "Senior");
        Accuracy accuracyP = new Accuracy("P", "Precision");
        Accuracy accuracySP = new Accuracy("SP", "High Precision");
        return Arrays.asList(accuracyN, accuracyH, accuracyP, accuracySP);
    }

    public String getProductCode(BoltParameters boltParameters) {
        String productCode = "SG" +
            boltParameters.getBlockType1() +
            boltParameters.getDimensions() +
            boltParameters.getBlockType2() +
            boltParameters.getBlocksPerRail() +
            boltParameters.getMountingType() +
            boltParameters.getLength() +
            boltParameters.getSpecialTreatment() +
            boltParameters.getAccessory() +
            boltParameters.getPreload();
        return productCode;
    }

    public double getPrice(BoltParameters boltParameters) {
        return 100.01;
    }
}

package com.capps.cappsconfigurator.sgSeries.nonInterchangeable.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class BoltParameters {
    public String blockType1;
    public int dimensions;
    public String blockType2;
    public int blocksPerRail;
    public String mountingType;
    public int length;
    public String specialTreatment;
    public String accessory;
    public String preload;
}

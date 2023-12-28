package com.capps.cappsconfigurator.sgSeries.nonInterchangeable.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Preload {
    public String preloadCode;
    public String preloadLabel;
    public String preloadCondition;
}

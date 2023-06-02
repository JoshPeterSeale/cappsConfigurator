package com.capps.cappsconfigurator.model.Bolts;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CreateBoltInput {
    public int diameter;
    public int length;
    public String nutMaterial;
    public int pitch;
}

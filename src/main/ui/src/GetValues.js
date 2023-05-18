import React from "react";

export async function GetDiameters() {
    try {
        const response = await fetch('/api/v1/bolt-configuration/diameter');
        const diameter = await response.json();
        return diameter;
    } catch(error) {
        return ["Cannot obtain Lengths"];
    }
}

export async function GetPitch() {
    try {
        const response = await fetch('/api/v1/bolt-configuration/pitch');
        const pitch = await response.json();
        return pitch;
    } catch(error) {
        return ["Cannot obtain Lengths"];
    }
}

export async function GetNutType() {
    try {
        const response = await fetch('/api/v1/bolt-configuration/nutType');
        const nutType = await response.json();
        return nutType;
    } catch(error) {
        return ["Cannot obtain Lengths"];
    }
}
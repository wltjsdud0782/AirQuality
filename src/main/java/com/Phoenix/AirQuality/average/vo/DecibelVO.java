package com.Phoenix.AirQuality.average.vo;

import lombok.Data;

@Data
public class DecibelVO {
    private int decibelCode;
    private int decibel;
    private String decibelGrade;
    private String serialNo;

    private float decibelPercent;
    private float avgDeci;
}

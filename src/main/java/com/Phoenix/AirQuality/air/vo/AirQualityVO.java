package com.Phoenix.AirQuality.air.vo;

import lombok.Data;

@Data
public class AirQualityVO {
    private int airNo;
    private int pmCode;
    private String pmGrade;
    private int fpmCode;
    private String fpmGrade;
    private float co2Code;
    private int vocsCode;
    private String serialNo;

    private double pmPercent;
    private double fpmPercent;
}

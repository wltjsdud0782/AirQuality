package com.Phoenix.AirQuality.air.vo;

import lombok.Data;

@Data
public class AirQualityVO {
    private int airNo;
    private float pmCode;
    private String pmGrade;
    private float fpmCode;
    private String fpmGrade;
    private double co2Code;
    private float vocsCode;
    private String serialNo;

    private double pmPercent;
    private double fpmPercent;

    private CiciVO ciciVO;
}

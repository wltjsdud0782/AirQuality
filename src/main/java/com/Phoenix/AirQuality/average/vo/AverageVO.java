package com.Phoenix.AirQuality.average.vo;

import lombok.Data;

@Data
public class AverageVO {
    private String day;
    private double temAvg;
    private double humAvg;
    private double maxTem;
    private double minTem;
}

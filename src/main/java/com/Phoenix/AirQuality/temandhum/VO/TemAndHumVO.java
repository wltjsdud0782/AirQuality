package com.Phoenix.AirQuality.temandhum.VO;

import lombok.Data;

import java.io.PipedReader;

@Data
public class TemAndHumVO {
    private int dataCode;
    private String dataTime;
    private String serialNo;
    private double temperature;
    private int humidity;
    private double maxTemperature;
    private int maxHumidity;
    private double minTemperature;
    private int minHumidity;
}

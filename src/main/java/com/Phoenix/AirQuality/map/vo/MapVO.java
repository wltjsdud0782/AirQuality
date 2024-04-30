package com.Phoenix.AirQuality.map.vo;

import com.Phoenix.AirQuality.air.vo.AirQualityVO;
import lombok.Data;

@Data
public class MapVO {
        private String serialNo;
        private String stationName;
        private double lat;
        private double lon;

        private AirQualityVO airQualityVO;


}

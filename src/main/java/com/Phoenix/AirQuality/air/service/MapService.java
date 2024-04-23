package com.Phoenix.AirQuality.air.service;

import com.Phoenix.AirQuality.air.vo.MapVO;

import java.util.List;

public interface MapService {

//    지도 경도, 위도 , 스테이션명, 시리얼번호
    List<MapVO> selectMap();
}

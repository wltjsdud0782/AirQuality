package com.Phoenix.AirQuality.air.service;

import com.Phoenix.AirQuality.air.vo.AirQualityVO;
import com.Phoenix.AirQuality.air.vo.CiciVO;

import java.util.List;

public interface AirService {

    //공기질 보기
    List<AirQualityVO> selectAirQuality();

    //통합실내지수 보기
    List<CiciVO> selectCici();

}

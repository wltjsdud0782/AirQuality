package com.Phoenix.AirQuality.air.service;

import com.Phoenix.AirQuality.air.vo.AirQualityVO;
import com.Phoenix.AirQuality.air.vo.CiciVO;

import java.util.List;

public interface AirService {

    //공기질 전체 보기
    List<AirQualityVO> selectAirQuality();

    //통합실내지수 전체 보기
    List<CiciVO> selectCici();

    // ----------------------------------------------------------------------------------------- //

    //가장 높은 실내통합지수 top 10
    List<CiciVO> bestCiciTop10();

    //가장 낮은 실내통합지수 top 10
    List<CiciVO> worstCiciTop10();

}

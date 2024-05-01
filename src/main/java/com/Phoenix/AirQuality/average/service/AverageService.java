package com.Phoenix.AirQuality.average.service;

import com.Phoenix.AirQuality.average.vo.AverageVO;

import java.util.List;

public interface AverageService {
    List<AverageVO> selectAvg();

    String todayDate();
}

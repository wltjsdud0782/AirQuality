package com.Phoenix.AirQuality.temandhum.service;

import com.Phoenix.AirQuality.temandhum.VO.TemAndHumVO;

import java.util.List;

public interface TemAndHumService {
    List<TemAndHumVO> nine();

    TemAndHumVO detailSelect(String serialNo);
}

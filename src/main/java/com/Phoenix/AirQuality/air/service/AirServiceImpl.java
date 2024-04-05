package com.Phoenix.AirQuality.air.service;

import com.Phoenix.AirQuality.air.vo.AirQualityVO;
import com.Phoenix.AirQuality.air.vo.CiciVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("airService")
public class AirServiceImpl implements AirService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    //공기질 보기
    @Override
    public List<AirQualityVO> selectAirQuality() {
        return null;
    }

    //통합실내지수 보기
    @Override
    public List<CiciVO> selectCici() {
        return null;
    }
}

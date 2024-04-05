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

    //공기질 전체 보기
    @Override
    public List<AirQualityVO> selectAirQuality() {
        return sqlSession.selectList("airMapper.selectAirQuality");
    }

    //통합실내지수 전체 보기
    @Override
    public List<CiciVO> selectCici() {
        return sqlSession.selectList("ciciMapper.selectCici");
    }

    // ----------------------------------------------------------------------------------------- //

    //가장 높은 실내통합지수 top 10
    @Override
    public List<CiciVO> bestCiciTop10() {
        return sqlSession.selectList("ciciMapper.bestCiciTop10");
    }

    //가장 낮은 실내통합지수 top 10
    @Override
    public List<CiciVO> worstCiciTop10() {
        return sqlSession.selectList("ciciMapper.worstCiciTop10");
    }
}
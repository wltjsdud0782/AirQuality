package com.Phoenix.AirQuality.average.service;

import com.Phoenix.AirQuality.average.vo.AverageVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("averageService")
public class AverageServiceImpl implements AverageService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<AverageVO> selectAvg() {
        return sqlSession.selectList("averageMapper.selectAvg");
    }
}

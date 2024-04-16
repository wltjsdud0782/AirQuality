package com.Phoenix.AirQuality.average.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("averageService")
public class AverageServiceImpl implements AverageService{
    @Autowired
    private SqlSessionTemplate sqlSession;
}

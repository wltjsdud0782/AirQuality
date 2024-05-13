package com.Phoenix.AirQuality.temandhum.service;

import com.Phoenix.AirQuality.temandhum.VO.TemAndHumVO;
import org.apache.ibatis.javassist.expr.NewArray;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("temAndHumService")
public class TemAndHumImpl implements TemAndHumService{
    @Autowired
    private SqlSessionTemplate sqlSession;


//    @Override
//    public List<TemAndHumVO> nine() {
//        return null;
//    }

    @Override
    public TemAndHumVO detailSelect(String serialNo) {
        return sqlSession.selectOne("temAndHumMapper.detailSelect",serialNo);
    }

    @Override
    public List<TemAndHumVO> allSelect() {
        return sqlSession.selectList("temAndHumMapper.allSelect");
    }
}

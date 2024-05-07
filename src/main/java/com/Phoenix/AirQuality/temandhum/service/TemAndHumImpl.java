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

    @Override
    public List<TemAndHumVO> nine() {
        List<TemAndHumVO> temAndHumList = new ArrayList<>();

        if(sqlSession.selectOne("temAndHumMapper.nine") != null){
            temAndHumList.add(sqlSession.selectOne("temAndHumMapper.nine"));
        }

        if(sqlSession.selectOne("temAndHumMapper.eleven") != null){
            temAndHumList.add(sqlSession.selectOne("temAndHumMapper.eleven"));
        }

        if(sqlSession.selectOne("temAndHumMapper.thirteen") != null){
            temAndHumList.add(sqlSession.selectOne("temAndHumMapper.thirteen"));
        }
        if(sqlSession.selectOne("temAndHumMapper.fifteen") != null){
            temAndHumList.add(sqlSession.selectOne("temAndHumMapper.fifteen"));
        }
        if(sqlSession.selectOne("temAndHumMapper.seventeen") != null){
            temAndHumList.add(sqlSession.selectOne("temAndHumMapper.seventeen"));
        }

//
//        temAndHumList.add(sqlSession.selectOne("temAndHumMapper.thirteen"));
//        temAndHumList.add(sqlSession.selectOne("temAndHumMapper.fifteen"));
//        temAndHumList.add(sqlSession.selectOne("temAndHumMapper.seventeen"));

        return temAndHumList;
    }
}

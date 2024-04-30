package com.Phoenix.AirQuality.map.service;

import com.Phoenix.AirQuality.map.vo.MapVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("mapService")
public class MapServiceImpl implements MapService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    //시리얼번호, 스테이션명, 위도, 경도
    @Override
    public List<MapVO> selectMap() {
        return sqlSession.selectList("mapMapper.selectMap");
    }

    //시리얼번호 상세목록
    @Override
    public MapVO detailNoSelect(String serialNo) {
        MapVO result=sqlSession.selectOne("mapMapper.detailNoSelect",serialNo);
        return result;
    }




}

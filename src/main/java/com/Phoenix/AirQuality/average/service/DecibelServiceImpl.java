package com.Phoenix.AirQuality.average.service;

import com.Phoenix.AirQuality.average.vo.DecibelVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("decibelService")
public class DecibelServiceImpl implements DecibelService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<DecibelVO> decibelPie() {
        return sqlSession.selectList("decibelMapper.decibelPie");
    }

    @Override
    public DecibelVO serialDecibel(String serialNo) {
        return sqlSession.selectOne("decibelMapper.serialDecibel", serialNo);
    }
}

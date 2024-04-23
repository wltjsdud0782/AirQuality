package com.Phoenix.AirQuality.air.controller;

import com.Phoenix.AirQuality.air.service.AirServiceImpl;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/air")
public class AirController {

    @Resource(name="airService")
    private AirServiceImpl airService;

    // 도넛 차트
    @ResponseBody
    @PostMapping("/doughnutChart")
    public Map<String, Object> doughnutChart(){
        Map<String, Object> map = new HashMap<>();
        //PM 등급
        map.put("PM", airService.selectPm());
        //FPM 등급
        map.put("FPM", airService.selectFpm());
        //통합실내지수 등급
        map.put("CICI", airService.selectCici());
        return map;
    }

}

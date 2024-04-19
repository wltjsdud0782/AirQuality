package com.Phoenix.AirQuality.average.controller;

import com.Phoenix.AirQuality.average.service.AverageServiceImpl;
import com.Phoenix.AirQuality.average.vo.AverageVO;
import com.Phoenix.AirQuality.average.vo.DecibelVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/average")
public class AverageController {
    @Resource(name = "averageService")
    private AverageServiceImpl averageService;

    @ResponseBody
    @PostMapping("/averageBar")
    public List<AverageVO> averageBar(){

        List<AverageVO> avgData = averageService.selectAvg();

        return avgData;
    }
}

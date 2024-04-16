package com.Phoenix.AirQuality.average.controller;

import com.Phoenix.AirQuality.average.service.DecibelServiceImpl;
import com.Phoenix.AirQuality.average.vo.DecibelVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/decibel")
public class DecibelController {
    @Resource(name = "decibelService")
    private DecibelServiceImpl decibelService;

    @ResponseBody
    @PostMapping("/decibelPie")
    public List<DecibelVO> decibelPie(){
        List<DecibelVO> decibelGrade = decibelService.decibelPie();

        return decibelGrade;
    }
}

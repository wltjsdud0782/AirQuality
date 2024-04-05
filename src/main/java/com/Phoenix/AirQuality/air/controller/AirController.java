package com.Phoenix.AirQuality.air.controller;

import com.Phoenix.AirQuality.air.service.AirServiceImpl;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/air")
public class AirController {

    @Resource(name="airService")
    private AirServiceImpl airService;

//    @GetMapping("/test")
//    public String showAirTest(){
//        return "content/air/test";
//    }


}

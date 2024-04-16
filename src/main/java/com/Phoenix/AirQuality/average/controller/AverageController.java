package com.Phoenix.AirQuality.average.controller;

import com.Phoenix.AirQuality.average.service.AverageServiceImpl;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/average")
public class AverageController {
    @Resource(name = "averageService")
    private AverageServiceImpl averageService;
}

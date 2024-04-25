package com.Phoenix.AirQuality.air.controller;

import com.Phoenix.AirQuality.air.service.MapServiceImpl;
import com.Phoenix.AirQuality.air.vo.MapVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/map")
public class MapController {
    @Resource(name="mapService")
    private MapServiceImpl mapService;


    @ResponseBody
    @PostMapping("/selectMap")
    public List<MapVO> selectMap(){
       return mapService.selectMap();
     }
}

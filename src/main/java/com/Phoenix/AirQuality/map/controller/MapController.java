package com.Phoenix.AirQuality.map.controller;

import com.Phoenix.AirQuality.map.service.MapServiceImpl;
import com.Phoenix.AirQuality.map.vo.MapVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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



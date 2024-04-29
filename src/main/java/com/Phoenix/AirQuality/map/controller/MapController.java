package com.Phoenix.AirQuality.map.controller;

import com.Phoenix.AirQuality.map.service.MapServiceImpl;
import com.Phoenix.AirQuality.map.vo.MapVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/map")
public class MapController {

        @Resource(name="mapService")
        private MapServiceImpl mapService;

        //지도 위 경도 불러오기
        @ResponseBody
        @PostMapping("/selectMap")
        public List<MapVO> selectMap(){
            return mapService.selectMap();
        }

        @GetMapping("/detail")
        public String detail(){
            return "content/detail";
        }
    }



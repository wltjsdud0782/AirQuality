package com.Phoenix.AirQuality.map.controller;

import com.Phoenix.AirQuality.average.service.AverageServiceImpl;
import com.Phoenix.AirQuality.average.service.DecibelServiceImpl;
import com.Phoenix.AirQuality.map.service.MapService;
import com.Phoenix.AirQuality.map.service.MapServiceImpl;
import com.Phoenix.AirQuality.map.vo.MapVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/map")
public class MapController {

        @Resource(name="mapService")
        private MapServiceImpl mapService;
        @Resource(name = "averageService")
        private AverageServiceImpl averageService;
        @Resource(name = "decibelService")
        private DecibelServiceImpl decibelService;

        //지도 위 경도 불러오기
        @ResponseBody
        @PostMapping("/selectMap")
        public List<MapVO> selectMap(){
            return mapService.selectMap();
        }

        @GetMapping("/detail")
        public String detail(@RequestParam(name="serialNo") String serialNo, Model model){
            //,required=false
            MapVO vo = mapService.detailNoSelect(serialNo);
            model.addAttribute("mapDetail", vo);
            model.addAttribute("today", averageService.todayDate());
            model.addAttribute("decibelInfo", decibelService.serialDecibel(serialNo));

            return "content/detail";
        }

    }



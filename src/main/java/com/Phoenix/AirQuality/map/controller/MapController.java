package com.Phoenix.AirQuality.map.controller;

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
            return "content/detail";
        }

    }



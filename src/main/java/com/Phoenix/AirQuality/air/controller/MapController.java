package com.Phoenix.AirQuality.air.controller;

import com.Phoenix.AirQuality.air.service.MapServiceImpl;
import com.Phoenix.AirQuality.air.vo.MapVO;
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

@ResponseBody
@GetMapping("/selectMap")
   public List<MapVO> selectMap(){
      List<MapVO> map=mapService.selectMap();
    System.out.println(map);
    return null;
}

}

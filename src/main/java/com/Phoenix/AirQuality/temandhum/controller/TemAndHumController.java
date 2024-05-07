package com.Phoenix.AirQuality.temandhum.controller;

import com.Phoenix.AirQuality.temandhum.VO.TemAndHumVO;
import com.Phoenix.AirQuality.temandhum.service.TemAndHumService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/temAndHum")
public class TemAndHumController {
    @Resource(name = "temAndHumService")
    private TemAndHumService temAndHumService;

    @ResponseBody
    @PostMapping("/temAndHumSelect")
    public List<TemAndHumVO> selectTemAndHum(){

        List<TemAndHumVO> dataList = temAndHumService.nine();
        System.out.println("!!!!!!!!!!!!!!!" + dataList);
        return dataList;
    }


}

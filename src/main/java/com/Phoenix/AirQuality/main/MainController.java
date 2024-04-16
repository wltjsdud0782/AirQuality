package com.Phoenix.AirQuality.main;

import com.Phoenix.AirQuality.average.service.DecibelServiceImpl;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main")
public class MainController {

    @GetMapping("/main")
    public String main(){
        return "content/home";


    }



}

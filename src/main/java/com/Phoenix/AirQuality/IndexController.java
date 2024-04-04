package com.Phoenix.AirQuality;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController { // 메인

    @GetMapping("/")
    public String main(){
        return "redirect:/main/main";
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // ~~~~~~~~~~~~~~ StudyRoom 팀플처럼 ~~~~~~~~~~~~~~
    // com.Phoenix.AirQuality.[자신이 작업할 폴더] 생성 필수!
    // resources.mapper.[자신이 작업할 mapper 폴더] 생성 필수!
    // resources.static.css.[자신이 작업할 css 폴더] / static.js.[자신이 작업할 js 폴더] 생성 필수!
    // resources.content.[자신이 작업할 html 폴더] 생성 필수! <main 폴더는 가만히 두기!>
    // test 라고 적혀있는 파일들은 나중에 최종 때 삭제할 예정이니 가만히 두시면 됩니다!

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

}

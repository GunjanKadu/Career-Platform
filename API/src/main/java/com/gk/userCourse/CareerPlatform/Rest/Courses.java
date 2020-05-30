package com.gk.userCourse.CareerPlatform.Rest;

import com.gk.userCourse.CareerPlatform.Service.CoursesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class Courses {

    @Autowired
    private CoursesService coursesService;

    @GetMapping("/courses")
    public List<com.gk.userCourse.CareerPlatform.Entity.Courses> getCourses(){
        return coursesService.findAll();
    }

}

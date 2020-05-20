package com.gk.userCourse.CareerPlatform.Rest;

import com.gk.userCourse.CareerPlatform.Entity.FeaturedCourses;
import com.gk.userCourse.CareerPlatform.Service.FeaturedCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TopCourses {

    @Autowired
    private FeaturedCourseService featuredCourseService;

    @GetMapping("/featuredCourses")
    public List<FeaturedCourses> getAllFeaturedCourse() {
        return featuredCourseService.findAll();
    }

    @PostMapping("/featuredCourses")
    public FeaturedCourses saveTopCourse(@RequestBody FeaturedCourses featuredCourses) {
        featuredCourses.setId(0);
        featuredCourseService.save(featuredCourses);
        return featuredCourses;
    }

}

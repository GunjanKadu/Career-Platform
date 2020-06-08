package com.gk.userCourse.CareerPlatform.Service;

import com.gk.userCourse.CareerPlatform.Entity.FeaturedCourses;

import java.util.List;

public interface FeaturedCourseService {

    List<FeaturedCourses> findAll();

    void save(FeaturedCourses featuredCourses);

    void delete(int id);
}

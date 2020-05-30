package com.gk.userCourse.CareerPlatform.Service;

import com.gk.userCourse.CareerPlatform.Entity.CourseLecture;
import com.gk.userCourse.CareerPlatform.Entity.Courses;

import java.util.List;
import java.util.Optional;

public interface CoursesService {

    List<Courses> findAll();

    void saveCourses(Courses theCourses);

    void saveCourseLecture(CourseLecture courseLecture);

    Optional<Courses> findById(int theId);

    void deleteCourse(int courseId);
}

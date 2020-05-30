package com.gk.userCourse.CareerPlatform.Dao;

import com.gk.userCourse.CareerPlatform.Entity.Courses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoursesDAO extends JpaRepository<Courses,Integer> {
}

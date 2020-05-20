package com.gk.userCourse.CareerPlatform.Dao;

import com.gk.userCourse.CareerPlatform.Entity.FeaturedCourses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeaturedCourseDao extends JpaRepository<FeaturedCourses,Integer> {
}

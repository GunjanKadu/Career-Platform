package com.gk.userCourse.CareerPlatform.Service;

import com.gk.userCourse.CareerPlatform.Dao.CourseLectureDao;
import com.gk.userCourse.CareerPlatform.Dao.CoursesDAO;
import com.gk.userCourse.CareerPlatform.Entity.CourseLecture;
import com.gk.userCourse.CareerPlatform.Entity.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class CoursesServiceImpl implements CoursesService{

    @Autowired
    private CoursesDAO coursesDAO;

    @Autowired
    private CourseLectureDao courseLectureDao;

    @Override
    @Transactional
    public List<Courses> findAll() {
       return coursesDAO.findAll();
    }

    @Override
    @Transactional
    public void saveCourses(Courses theCourse) {
        coursesDAO.save(theCourse);
    }

    @Override
    @Transactional
    public void saveCourseLecture(CourseLecture courseLecture) {
        courseLectureDao.save(courseLecture);
    }

    @Override
    public Optional<Courses> findById(int theId) {
        return coursesDAO.findById(theId);
    }

    @Override
    public void deleteCourse(int courseId) {
        coursesDAO.deleteById(courseId);
    }
}

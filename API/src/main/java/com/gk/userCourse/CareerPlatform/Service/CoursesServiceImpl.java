package com.gk.userCourse.CareerPlatform.Service;

import com.gk.userCourse.CareerPlatform.Dao.CoursesDAO;
import com.gk.userCourse.CareerPlatform.Entity.Courses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CoursesServiceImpl implements CoursesService{

    @Autowired
    private CoursesDAO coursesDAO;

    @Override
    @Transactional
    public List<Courses> findAll() {
       return coursesDAO.findAll();
    }
}

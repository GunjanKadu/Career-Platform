package com.gk.userCourse.CareerPlatform.Service;

import com.gk.userCourse.CareerPlatform.Dao.FeaturedCourseDao;
import com.gk.userCourse.CareerPlatform.Entity.FeaturedCourses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
public class FeaturedCoursesImpl implements FeaturedCourseService {

    @Autowired
    private FeaturedCourseDao featuredCourseDao;

    @Override
    @Transactional
    public List<FeaturedCourses> findAll() {
        return featuredCourseDao.findAll();
    }

    @Override
    @Transactional
    public void save(FeaturedCourses featuredCourses) {
        featuredCourseDao.save(featuredCourses);
    }
}

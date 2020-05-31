package com.gk.userCourse.CareerPlatform.Rest;

import com.gk.userCourse.CareerPlatform.Entity.CourseLecture;
import com.gk.userCourse.CareerPlatform.Entity.User;
import com.gk.userCourse.CareerPlatform.Service.CoursesService;
import com.gk.userCourse.CareerPlatform.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class Courses {

    @Autowired
    private CoursesService coursesService;

    @Autowired
    private UserService userService;

    @RolesAllowed({"ROLE_ADMIN", "ROLE_INSTRUCTOR"})
    @PostMapping("/courses/lectures/{courseId}")
    public CourseLecture saveCourseLecture(@PathVariable int courseId, @RequestBody CourseLecture courseLecture) throws Exception {
        List<com.gk.userCourse.CareerPlatform.Entity.Courses> tempListCourse = coursesService.findAll().stream().filter(course -> course.getId() == courseId).collect(Collectors.toList());
        if (tempListCourse.size() == 1) {
            com.gk.userCourse.CareerPlatform.Entity.Courses tempCourse = tempListCourse.get(0);
            tempCourse.add(courseLecture);
            coursesService.saveCourses(tempCourse);
            return courseLecture;
        }
        throw new Exception("Course Not Found");
    }


    @GetMapping("/courses")
    public List<com.gk.userCourse.CareerPlatform.Entity.Courses> getCourses() {
        return coursesService.findAll();
    }

    @RolesAllowed({"ROLE_ADMIN", "ROLE_INSTRUCTOR"})
    @PostMapping("/courses")
    @Transactional
    public com.gk.userCourse.CareerPlatform.Entity.Courses saveCourse(@RequestBody com.gk.userCourse.CareerPlatform.Entity.Courses course) {
        course.setId(0);
        coursesService.saveCourses(course);
        return course;
    }

    @RolesAllowed({"ROLE_ADMIN", "ROLE_INSTRUCTOR", "ROLE_USER"})
    @GetMapping("/courses/{courseId}")
    public Optional<com.gk.userCourse.CareerPlatform.Entity.Courses> getSingleCourse(@PathVariable int courseId) throws Exception {
        Optional<com.gk.userCourse.CareerPlatform.Entity.Courses> foundCourse = coursesService.findById(courseId);

        if (foundCourse.isPresent()) {
            return foundCourse;
        }
        throw new Exception("Course Not Found");
    }

    @RolesAllowed({"ROLE_ADMIN", "ROLE_INSTRUCTOR"})
    @DeleteMapping("/courses/{courseId}")
    public String deleteCourse(@PathVariable int courseId) throws Exception {
        Optional<com.gk.userCourse.CareerPlatform.Entity.Courses> foundCourse = coursesService.findById(courseId);
        if (foundCourse.isPresent()) {
            coursesService.deleteCourse(courseId);
            return "Deleted the Course " + foundCourse.get().getName();
        }
        throw new Exception("Course Not Found");
    }

    @RolesAllowed({"ROLE_ADMIN", "ROLE_INSTRUCTOR"})
    @DeleteMapping("/courses/{courseId}/lectures/{lectureId}")
    public String deleteLecture(@PathVariable int courseId, @PathVariable int lectureId) throws Exception {
        Optional<com.gk.userCourse.CareerPlatform.Entity.Courses> foundCourse = coursesService.findById(courseId);
        if (foundCourse.isPresent()) {
            Optional<CourseLecture> foundLecture = coursesService.findLectureById(lectureId);
            if (foundLecture.isPresent()) {
                coursesService.deleteLectures(lectureId);
                return "Deleted the Lecture " + foundLecture.get().getTitle() + "from " + foundCourse.get().getName();
            }
            throw new Exception("Lecture Not Found in " + foundCourse.get().getName());
        }
        throw new Exception("Course Not Found");
    }

    @RolesAllowed({"ROLE_ADMIN", "ROLE_INSTRUCTOR", "ROLE_USER"})
    @PostMapping("/user/{userId}/courses/{courseId}")
    @Transactional
    public List<com.gk.userCourse.CareerPlatform.Entity.Courses> addUserToCourse(@PathVariable int courseId, @PathVariable int userId) throws Exception {
        List<com.gk.userCourse.CareerPlatform.Entity.Courses> courses = coursesService.findAll();
        List<com.gk.userCourse.CareerPlatform.Entity.Courses> foundCourse = courses.stream().filter(crs -> crs.getId() == courseId).collect(Collectors.toList());
        User foundUser = userService.findbyId(userId);
        if (foundCourse.size() == 1 && foundUser != null) {
            com.gk.userCourse.CareerPlatform.Entity.Courses tempCourse = foundCourse.get(0);
            foundUser.add(tempCourse);
            userService.save(foundUser);
        List<com.gk.userCourse.CareerPlatform.Entity.Courses> foundCourses = foundUser.getCourses();
            return foundCourses;
        }
        throw new Exception("The Specified Course or User Not Found");
    }

}

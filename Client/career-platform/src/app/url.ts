// Authentication
export const LOGIN = "http://localhost:8080/api/login";
export const SIGNUP = "http://localhost:8080/api/signin";
export const FETCHUSER =
  "http://localhost:8080/api/users/getByUserName?userName=";

export const POSTUSERDETAILS = "http://localhost:8080/api/usersDetails/";
export const POSTUSERDETAILSBASIC = "http://localhost:8080/api/users/";

// Trending Courses
export const TRENDINGCOURSES = "http://localhost:8080/api/featuredCourses";

//All Courses
export const COURSES = "http://localhost:8080/api/courses";

//Add user to course
export const ADDUSERTOCOURSE = (userId: number, courseId: number) =>
  `http://localhost:8080/api/user/${userId}/courses/${courseId}`;

//Change user to Instructor
export const CHANGETOINSTRUCTOR = (userId: number) =>
  `http://localhost:8080/api/users/${userId}/changeToInstructor/`;

// Add Course
export const ADDCOURSE = "http://localhost:8080/api/courses";

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

// Add Lecture to Course
export const ADDLECTURETOCOURSE = "http://localhost:8080/api/courses/lectures";

//Delete Lecture from Course
export const DELETELECTURE = (courseId: number, lectureId: number) =>
  `http://localhost:8080/api/lectures/${lectureId}/courses/${courseId}`;

// Authentication

// export const LOGIN = "https://career-platform.herokuapp.com/api/login";
// export const SIGNUP = "https://career-platform.herokuapp.com/api/signin";
// export const FETCHUSER =
//   "https://career-platform.herokuapp.com/api/users/getByUserName?userName=";

// export const POSTUSERDETAILS =
//   "https://career-platform.herokuapp.com/api/usersDetails/";
// export const POSTUSERDETAILSBASIC =
//   "https://career-platform.herokuapp.com/api/users/";

// // Trending Courses
// export const TRENDINGCOURSES =
//   "https://career-platform.herokuapp.com/api/featuredCourses";

// //All Courses
// export const COURSES = "https://career-platform.herokuapp.com/api/courses";

// //Add user to course
// export const ADDUSERTOCOURSE = (userId: number, courseId: number) =>
//   `https://career-platform.herokuapp.com/api/user/${userId}/courses/${courseId}`;

// //Change user to Instructor
// export const CHANGETOINSTRUCTOR = (userId: number) =>
//   `https://career-platform.herokuapp.com/api/users/${userId}/changeToInstructor/`;

// // Add Course
// export const ADDCOURSE = "https://career-platform.herokuapp.com/api/courses";

// // Add Lecture to Course
// export const ADDLECTURETOCOURSE =
//   "https://career-platform.herokuapp.com/api/courses/lectures";

// //Delete Lecture from Course
// export const DELETELECTURE = (courseId: number, lectureId: number) =>
//   `https://career-platform.herokuapp.com/api/lectures/${lectureId}/courses/${courseId}`;

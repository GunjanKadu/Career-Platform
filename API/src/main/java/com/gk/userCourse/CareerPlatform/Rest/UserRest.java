package com.gk.userCourse.CareerPlatform.Rest;

import com.gk.userCourse.CareerPlatform.Entity.User;
import com.gk.userCourse.CareerPlatform.Entity.UserDetails;
import com.gk.userCourse.CareerPlatform.ErrorHandling.UserNotFoundExecption;
import com.gk.userCourse.CareerPlatform.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserRest {

    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserRest(UserService theUserService) {
        this.userService = theUserService;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAll();
    }

    @GetMapping("/users/{userId}")
    public User getSingleUser(@PathVariable int userId) {
        User foundUser = userService.findbyId(userId);
        if (userId < 0 || foundUser == null) {
            throw new UserNotFoundExecption("User Id Not Found - " + userId);
        }
        return foundUser;
    }

    @GetMapping("/users/getByUserName")
    public User getSingleUser(@RequestParam String userName) {
        if (userName.length() < 0) {
            throw new UserNotFoundExecption("User Name Not Found - " + userName);
        }
        return userService.findByUserName(userName);
    }

    @PostMapping("/users")
    public User saveUsers(@RequestBody User theUser) {
        theUser.setId(0);
        userService.save(theUser);
        return theUser;
    }

    @PostMapping("/users/{userId}")
    public User editUser(@PathVariable int userId, @RequestBody User theUser) {

        User tempUser = userService.findbyId(userId);
        if (tempUser != null) {
            tempUser.setFirstName(theUser.getFirstName());
            tempUser.setLastName(theUser.getLastName());
            tempUser.setEmail(theUser.getEmail());
            tempUser.setPassword(theUser.getPassword().length() <= 30 ? passwordEncoder.encode(theUser.getPassword()) : theUser.getPassword());
            tempUser.setUserDetails(theUser.getUserDetails());
            userService.save(tempUser);
        }
        return tempUser;
    }

    @PostMapping("/usersDetails/{userId}")
    public User saveUsers(@PathVariable int userId, @RequestBody UserDetails theUserDetails) {
        User tempUser = userService.findbyId(userId);
        tempUser.setUserDetails(theUserDetails);
        userService.save(tempUser);
        return tempUser;
    }

    @PostMapping("/users/{userId}/changeToInstructor")
    public User changeToInstructor(@PathVariable int userId) throws Exception {
        User tempUser = userService.findbyId(userId);
        if (tempUser == null) {
            throw new Exception("User Not Found with Id " + userId);
        }
        tempUser.setRole("ROLE_INSTRUCTOR");
        userService.save(tempUser);
        return tempUser;
    }

}

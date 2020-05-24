package com.gk.userCourse.CareerPlatform.Rest;

import com.gk.userCourse.CareerPlatform.Entity.User;
import com.gk.userCourse.CareerPlatform.Entity.UserDetails;
import com.gk.userCourse.CareerPlatform.ErrorHandling.UserNotFoundExecption;
import com.gk.userCourse.CareerPlatform.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class UserRest {

    private UserService userService;

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
        if (userId < 0 || userId > userService.findAll().size()) {
            throw new UserNotFoundExecption("User Id Not Found - " + userId);
        }
        return userService.findbyId(userId);
    }

    @PostMapping("/users/getByUserName")
    public User getSingleUser(@RequestBody String userName) {
        if (userName.length() < 0) {
            throw new UserNotFoundExecption("User Name Not Found - " + userName);
        }
        List<User> allUsers = userService.findAll();
        List<User> foundUser = allUsers.stream().filter(User -> User.getEmail().equals(userName)).collect(Collectors.toList());
        return foundUser.get(0);
    }

    @PostMapping("/users")
    public User saveUsers(@RequestBody User theUser) {
        theUser.setId(0);
        userService.save(theUser);
        return theUser;
    }

    @PostMapping("/usersDetails/{userId}")
    public User saveUsers(@PathVariable int userId, @RequestBody UserDetails theUserDetails) {
        User tempUser = userService.findbyId(userId);
        tempUser.setUserDetails(theUserDetails);
        userService.save(tempUser);
        return tempUser;
    }

}

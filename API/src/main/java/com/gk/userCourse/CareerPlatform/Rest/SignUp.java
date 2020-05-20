package com.gk.userCourse.CareerPlatform.Rest;

import com.gk.userCourse.CareerPlatform.Entity.User;
import com.gk.userCourse.CareerPlatform.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class SignUp {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signin")
    public User saveUsers(@RequestBody User theUser) throws Exception {

        List<User> allUsers = userService.findAll();

        List<User> foundUser = allUsers.stream().filter(user -> user.getEmail().equals(theUser.getEmail())).collect(Collectors.toList());

        if (foundUser.size() >= 1) {
            throw new Exception("UserName Already Exists");
        }
        theUser.setId(0);
        String encodedPasword = passwordEncoder.encode(theUser.getPassword());
        theUser.setPassword(encodedPasword);
        userService.save(theUser);
        return theUser;
    }
}

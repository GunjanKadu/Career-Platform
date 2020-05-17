package com.gk.userCourse.CareerPlatform.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gk.userCourse.CareerPlatform.Entity.User;
import com.gk.userCourse.CareerPlatform.Service.UserService;

@RestController
@RequestMapping("/api")
public class SignUp {

	@Autowired
	private UserService userService;

	@PostMapping("/signin")
	public User saveUsers(@RequestBody User theUser) {
		theUser.setId(0);
		userService.save(theUser);
		return theUser;
	}
}

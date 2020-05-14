package com.gk.userCourse.CareerPlatform.Rest;

import java.util.ArrayList;

import javax.annotation.PostConstruct;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gk.userCourse.CareerPlatform.Entity.User;

@RestController
@RequestMapping("/api")
public class UserRest {

	public ArrayList<User> users = new ArrayList<User>();

	@PostConstruct
	public void fillUsers() {
		users.add(new User(1, "Gunjan", "Kadu", "agunjan.kadu@gmail.com"));
		users.add(new User(2, "Arun", "Kadu", "arun.kadu@gmail.com"));
		users.add(new User(3, "Harshana", "Kadu", "harshana.kadu@gmail.com"));
	}


	@GetMapping("/users")
	public ArrayList<User> getUsers() {
		return users;
	}

}

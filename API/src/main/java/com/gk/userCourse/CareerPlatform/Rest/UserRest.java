package com.gk.userCourse.CareerPlatform.Rest;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gk.userCourse.CareerPlatform.Dao.UserDao;
import com.gk.userCourse.CareerPlatform.Entity.User;
import com.gk.userCourse.CareerPlatform.Entity.UserDetails;

@RestController
@RequestMapping("/api")
public class UserRest {

	private UserDao userDao;

	@Autowired
	public UserRest(UserDao userDao) {
		this.userDao = userDao;
	}

	@GetMapping("/users")
	public List<User> getUsers() {
		return userDao.findAll();
	}

	@GetMapping("/users/{userId}")
	public User getSingleUser(@PathVariable int userId) {
		return userDao.findById(userId);
	}

	@PostMapping("/users")
	public User saveUsers(@RequestBody User theUser) {
		theUser.setId(0);
		userDao.save(theUser);
		return theUser;
	}

	@PostMapping("/usersDetails/{userId}")
	public User saveUsers(@PathVariable int userId, @RequestBody UserDetails theUserDetails) {
		User tempUser = userDao.findById(userId);
		tempUser.setUserDetails(theUserDetails);
		userDao.save(tempUser);
		return tempUser;
	}

}

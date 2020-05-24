package com.gk.userCourse.CareerPlatform.Service;

import com.gk.userCourse.CareerPlatform.Entity.User;

import java.util.List;

public interface UserService {

	 List<User> findAll();
	
	 User findbyId(int theId);
	
	 void delete(int theId);
	
	 void save(User theUser);
	
	User findByUserName(String username);
}

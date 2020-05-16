package com.gk.userCourse.CareerPlatform.Service;

import java.util.List;

import com.gk.userCourse.CareerPlatform.Entity.User;

public interface UserService {

	public List<User> findAll();
	
	public User findbyId(int theId);
	
	public void delete(int theId);
	
	public void save(User theUser);
	
	
}

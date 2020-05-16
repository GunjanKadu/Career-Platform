package com.gk.userCourse.CareerPlatform.Dao;

import java.util.List;

import com.gk.userCourse.CareerPlatform.Entity.User;

public interface UserDao {

	public List<User> findAll();

	public User findById(int theId);

	public void save(User theUser);

	public void deleteById(int theId);

}

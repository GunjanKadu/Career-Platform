package com.gk.userCourse.CareerPlatform.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gk.userCourse.CareerPlatform.Entity.User;

public interface UserDao extends JpaRepository<User, Integer> {

	User findByEmail(String email);

}

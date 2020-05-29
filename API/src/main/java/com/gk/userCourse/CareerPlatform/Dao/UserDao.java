package com.gk.userCourse.CareerPlatform.Dao;

import com.gk.userCourse.CareerPlatform.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {

	User  findByEmail(String email);

}

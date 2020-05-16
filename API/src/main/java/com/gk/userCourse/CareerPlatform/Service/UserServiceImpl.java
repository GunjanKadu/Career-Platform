package com.gk.userCourse.CareerPlatform.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gk.userCourse.CareerPlatform.Dao.UserDao;
import com.gk.userCourse.CareerPlatform.Entity.User;


@Service
public class UserServiceImpl implements UserService {

	private UserDao userDao;

	@Autowired
	public UserServiceImpl(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public List<User> findAll() {
		return userDao.findAll();
	}

	@Override
	public User findbyId(int theId) {
		return userDao.findById(theId);
	}

	@Override
	public void delete(int theId) {
		userDao.deleteById(theId);
	}

	@Override
	public void save(User theUser) {
		userDao.save(theUser);

	}

}

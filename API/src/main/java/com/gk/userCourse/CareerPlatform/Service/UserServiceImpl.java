package com.gk.userCourse.CareerPlatform.Service;

import java.util.List;

import javax.transaction.Transactional;

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
	@Transactional
	public List<User> findAll() {
		return userDao.findAll();
	}

	@Override
	@Transactional
	public User findbyId(int theId) {
		return userDao.findById(theId);
	}

	@Override
	@Transactional
	public void delete(int theId) {
		userDao.deleteById(theId);
	}

	@Override
	@Transactional
	public void save(User theUser) {
		userDao.save(theUser);

	}

}

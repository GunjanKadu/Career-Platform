package com.gk.userCourse.CareerPlatform.Service;

import com.gk.userCourse.CareerPlatform.Dao.UserDao;
import com.gk.userCourse.CareerPlatform.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
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
        Optional<User> result = userDao.findById(theId);
        User theUser = null;
        if (result.isPresent()) {
            theUser = result.get();
        } else {
            // we didnt find an employee with the id
            throw new RuntimeException("Did not find user id" + theId);
        }
        return theUser;
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

    @Override
    public User findByUserName(String username) {
      return userDao.findByEmail(username);
    }

}

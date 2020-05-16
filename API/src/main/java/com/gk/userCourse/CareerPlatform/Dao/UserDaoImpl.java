package com.gk.userCourse.CareerPlatform.Dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.gk.userCourse.CareerPlatform.Entity.User;

@Repository
public class UserDaoImpl implements UserDao {

	private EntityManager entityManager;

	@Autowired
	public UserDaoImpl(EntityManager theEntityManager) {
		this.entityManager = theEntityManager;
		
		
	}

	@Transactional
	@Override
	public List<User> findAll() {
		Session currentSession = entityManager.unwrap(Session.class);

		Query<User> theQuery = currentSession.createQuery("from User", User.class);

		List<User> users = theQuery.getResultList();

		return users;

	}

	@Override
	@Transactional
	public User findById(int theId) {
		Session currentSession = entityManager.unwrap(Session.class);
		User theUser = currentSession.get(User.class, theId);
		return theUser;
	}

	
	@Transactional
	@Override
	public void save(User theUser) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(theUser);

	}

	@Override
	@Transactional
	public void deleteById(int theId) {
		// TODO Auto-generated method stub

	}

	

}
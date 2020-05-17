package com.gk.userCourse.CareerPlatform.Entity;

public class AuthRequest {

	private String userName;
	private String passwordString;

	public AuthRequest() {

	}
	
	public AuthRequest(String userName, String passwordString) {

		this.userName = userName;
		this.passwordString = passwordString;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPasswordString() {
		return passwordString;
	}

	public void setPasswordString(String passwordString) {
		this.passwordString = passwordString;
	}

	

}

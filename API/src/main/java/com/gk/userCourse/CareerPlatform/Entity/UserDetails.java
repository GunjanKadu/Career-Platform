package com.gk.userCourse.CareerPlatform.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "User_Details")
public class UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idUser_Details")
	private int id;

	@Column(name = "user_desc")
	private String description;

	@Column(name = "social_media")
	private String socialMedia;

	public UserDetails() {

	}

	public UserDetails(int id, String description, String socialMedia) {
		this.description = description;
		this.socialMedia = socialMedia;
	}

	public int getId() {
		return id;
	}

	@Override
	public String toString() {
		return "UserDetails [id=" + id + ", description=" + description + ", socialMedia=" + socialMedia + "]";
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSocialMedia() {
		return socialMedia;
	}

	public void setSocialMedia(String socialMedia) {
		this.socialMedia = socialMedia;
	}

}

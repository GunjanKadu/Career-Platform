package com.gk.userCourse.CareerPlatform.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "courses")
@Proxy(lazy = false)
public class Courses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_courses")
    private int id;

    @Column(name = "course_name")
    private String name;

    @Column(name = "description")
    private String desc;

    @Column(name = "lectures_Total")
    private int totalLectures;

    @Column(name = "date_Added")
    @CreationTimestamp
    private Date dateAdded;

    @Column(name = "category")
    private String category;

    @Column(name = "price")
    private String price;

    @Column(name = "total_hours")
    private String totalHours;

    @Column(name = "rating")
    private String rating;

    @Column(name = "level")
    private String level;

    @Column(name = "image")
    private String image;

    @Column(name = "short_description")
    private String shortDesc;

    @Column(name = "course_author")
    private String courseAuthor;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "course_id")
    private List<CourseLecture> courseLecture = new ArrayList<CourseLecture>();

    @ManyToMany(mappedBy = "courses", cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JsonIgnore
    private List<User> users;

    public Courses() {

    }

    //Convenience Method
    public void add(CourseLecture courseLecture) {
        this.courseLecture.add(courseLecture);
    }

    //Getters and setters
    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTotalHours() {
        return totalHours;
    }

    public void setTotalHours(String totalHours) {
        this.totalHours = totalHours;
    }

    public String getCourseAuthor() {
        return courseAuthor;
    }

    public void setCourseAuthor(String courseAuthor) {
        this.courseAuthor = courseAuthor;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getShortDesc() {
        return shortDesc;
    }

    public void setShortDesc(String shortDesc) {
        this.shortDesc = shortDesc;
    }

    public List<CourseLecture> getCourseLecture() {
        return courseLecture;
    }

    public void setCourseLecture(List<CourseLecture> courseLecture) {
        this.courseLecture = courseLecture;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getTotalLectures() {
        return totalLectures;
    }

    public void setTotalLectures(int totalLectures) {
        this.totalLectures = totalLectures;
    }

    public Date getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(Date dateAdded) {
        this.dateAdded = dateAdded;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}

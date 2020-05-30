package com.gk.userCourse.CareerPlatform.Entity;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "courses")
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


    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "course_id")
    private List<CourseLecture> courseLecture = new ArrayList<CourseLecture>();

    public Courses() {

    }

    public void add(CourseLecture courseLecture) {
        this.courseLecture.add(courseLecture);
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
}

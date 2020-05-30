package com.gk.userCourse.CareerPlatform.Entity;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "courses")
public class Courses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_courses")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "desc")
    private String desc;

    @Column(name = "lectures_Total")
    private String totalLectures;

    @Column(name = "date_Added")
    private Date dateAdded;

    @Column(name = "category")
    private String category;


    @OneToMany(mappedBy = "courses", cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST,
            CascadeType.REFRESH},fetch = FetchType.EAGER)
    private List<CourseLecture> courseLecture;

    public Courses() {

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

    public String getTotalLectures() {
        return totalLectures;
    }

    public void setTotalLectures(String totalLectures) {
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

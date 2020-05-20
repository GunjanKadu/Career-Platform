package com.gk.userCourse.CareerPlatform.Entity;

import javax.persistence.*;

@Entity
@Table(name = "featured_courses")
public class FeaturedCourses {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "course_desc")
    private String courseDesc;

    @Column(name = "image_url")
    private String image;

    @Column(name="course_author")
    private String author;

    @Column(name = "course_rating")
    private Double rating;

    @Column(name="course_price")
    private Double price;

    public FeaturedCourses() {

    }

    @Override
    public String toString() {
        return "FeaturedCourses{" +
                "courseName='" + courseName + '\'' +
                ", courseDesc='" + courseDesc + '\'' +
                ", image='" + image + '\'' +
                ", author='" + author + '\'' +
                ", rating=" + rating +
                ", price=" + price +
                '}';
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDesc() {
        return courseDesc;
    }

    public void setCourseDesc(String courseDesc) {
        this.courseDesc = courseDesc;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}

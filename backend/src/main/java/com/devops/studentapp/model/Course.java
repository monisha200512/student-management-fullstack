package com.devops.studentapp.model;
import jakarta.persistence.*;
import java.util.Set;
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String courseName;
    private String courseCode;
    private String instructor;
    private Integer credits;
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students;
    // Constructors
    public Course() {}
    
    public Course(String courseName, String courseCode, String instructor, Integer credits) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
        this.credits = credits;
    }
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getCourseName() { return courseName; }
    public void setCourseName(String courseName) { this.courseName = courseName; }
    
    public String getCourseCode() { return courseCode; }
    public void setCourseCode(String courseCode) { this.courseCode = courseCode; }
    
    public String getInstructor() { return instructor; }
    public void setInstructor(String instructor) { this.instructor = instructor; }
    
    public Integer getCredits() { return credits; }
    public void setCredits(Integer credits) { this.credits = credits; }
    
    public Set<Student> getStudents() { return students; }
    public void setStudents(Set<Student> students) { this.students = students; }
}
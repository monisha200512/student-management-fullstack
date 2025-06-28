package com.devops.studentapp.repository;

import com.devops.studentapp.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    
}

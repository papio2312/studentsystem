package com.panos.studentsystem.service;

import com.panos.studentsystem.model.Student;

import java.util.List;


public interface StydentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}

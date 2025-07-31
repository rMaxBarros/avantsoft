import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
    private students: Student[] = [];
    private nextId = 1;

    // Creates a new student and returns the created student object.
    create(CreateStudentDto: CreateStudentDto): Student {
        const newStudent: Student = {
            id: this.nextId++,
            ...CreateStudentDto
        };
        this.students.push(newStudent);
        return newStudent;
    }

    // Returns all students with a unique letter from their name.
    findAll(): (Student & {uniqueLetter: string})[] {
        return this.students.map(student => ({
            ...student,
            uniqueLetter: this.getUniqueLetter(student.name),
        }));
    }

    // Returns a student by ID along with a unique letter from their name.
    findOne(id: number): Student & {uniqueLetter: string}{
        const student = this.students.find(s => s.id === id);
        if(!student) {
            throw new NotFoundException(`Student not found. ID: ${id}`);
        }
        return {
            ...student,
            uniqueLetter: this.getUniqueLetter(student.name),
        };
    }

    // Helper function to find a unique letter in the student's name.
    private getUniqueLetter(name: string): string {
        const lowercase = name.toLowerCase();
        const letterCount: Record<string, number> = {};

        for(const char of lowercase) {
            letterCount[char] = (letterCount[char] || 0) + 1;
        }

        const uniqueChar = lowercase.split('').find(char => letterCount[char] === 1);
        return uniqueChar || '_';
    }

}

// The StudentsService provides methods to create, find all, and find a specific student by ID.

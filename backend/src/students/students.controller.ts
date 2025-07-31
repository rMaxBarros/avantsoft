import { Controller, Post, Get, Param, Body, ParseIntPipe } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Post()
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentsService.create(createStudentDto);
    }

    @Get()
    findAll() {
        return this.studentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.studentsService.findOne(id);
    }
}

// The StudentsController handles HTTP requests for student operations, allowing creation and retrieval of students.
// It uses the StudentsService to perform the actual logic and data manipulation.
// It defines routes for creating a student, retrieving all students, and finding a specific student by ID.
import { IsString, IsNumber, Min, Max} from 'class-validator';

export class CreateStudentDto {
    @IsString()
    name: string;

    @IsNumber()
    @Min(0)
    @Max(10)
    grade: number;
}

// This DTO is used to validate the data when creating a new student.
// It ensures that the name is a string and the grade is a number between 0 and 10.
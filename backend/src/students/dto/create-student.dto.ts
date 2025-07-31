import { IsString, IsNumber, Min, Max, IsNotEmpty} from 'class-validator';

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty({message: 'Name is required.'})
    name: string;

    @IsNumber({}, {message: 'Grade must be a number.'})
    @Min(0, {message: 'Grade must be at least 0.'})
    @Max(10, {message: 'Grade must be at most 10.'})
    grade: number;
}

// This DTO is used to validate the data when creating a new student.
// It ensures that the name is a string and the grade is a number between 0 and 10.
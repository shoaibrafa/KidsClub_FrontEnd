export interface Grade{
    schoolId: number;
    grade: string;
    startDate: Date | null;
    endDate: Date | null;
    teacher_email: string;
    teacher_name: string;
    teacher_lastname: string;
}
import { StudentRepository } from '../repositories/StudentRepository'
import { Student } from '../entities/Student'
import { randomUUID } from 'node:crypto'

export class StudentService {
  private studentRepository: StudentRepository

  constructor(studentRepository: StudentRepository) {
    this.studentRepository = studentRepository
  }

  async getCreate(
    firstName: string,
    lastName: string,
    phone: string
  ): Promise<void> {
    const student: Student = {
      id: randomUUID(),
      firstName,
      lastName,
      phone
    }
    await this.studentRepository.create(student)
  }

  async getList(): Promise<Student[]> {
    return this.studentRepository.list()
  }
}

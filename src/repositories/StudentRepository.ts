import {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand
} from '@aws-sdk/lib-dynamodb'
import { Student } from '../entities/Student'

export class StudentRepository {
  private client: DynamoDBDocumentClient
  private tableName = process.env.STUDENTS_TABLE || 'students'
  constructor(client: DynamoDBDocumentClient) {
    this.client = client
  }

  async create(student: Student): Promise<void> {
    await this.client.send(
      new PutCommand({
        TableName: this.tableName,
        Item: student
      })
    )
  }

  async list(): Promise<Student[]> {
    const result = await this.client.send(
      new ScanCommand({
        TableName: this.tableName
      })
    )
    return result.Items as Student[]
  }
}

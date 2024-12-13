import { APIGatewayProxyHandler } from 'aws-lambda'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'
import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { StudentRepository } from '../../repositories/StudentRepository'
import { StudentService } from '../../services/StudentService'
import { customErrorResponse, customResponse } from '../../helpers/customResponse'

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const client = DynamoDBDocumentClient.from(new DynamoDB({}))
    const studentRepository = new StudentRepository(client)
    const studentService = new StudentService(studentRepository)

    const users = await studentService.getList()
    return customResponse(200, users, "Liste des etudiants")
  } catch (error: any) {
    if (!error) return customErrorResponse(500, 'Une erreur est survenue.')
    return customErrorResponse(error.statusCode, error.message)
  }
}

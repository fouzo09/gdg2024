import { APIGatewayProxyHandler } from 'aws-lambda'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'
import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { StudentRepository } from '../../repositories/StudentRepository'
import { StudentService } from '../../services/StudentService'
import { customErrorResponse, customResponse } from '../../helpers/customResponse'


export const handler: APIGatewayProxyHandler = async (event) => {
  try {

    const client = DynamoDBDocumentClient.from(new DynamoDB({}))
    const studentRepository = new StudentRepository(client)
    const studentService = new StudentService(studentRepository)

    const { firstName, lastName, phone } = JSON.parse(
      event.body!
    )
    await studentService.getCreate(firstName, lastName, phone)
    return customResponse(
      201,
      null,
      'Student est cree avec succes.'
    )
  } catch (error: any) {
    if (!error) return customErrorResponse(500, 'Une erreur est survenue.')
    return customErrorResponse(error.statusCode, error.message)
  }
}
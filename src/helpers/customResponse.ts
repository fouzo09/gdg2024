export const customResponse = <T>(
  statusCode: number,
  data: any | null,
  message: string
) => {
  const body = data
    ? { success: statusCode >= 200 && statusCode < 300, data, message }
    : { success: statusCode >= 200 && statusCode < 300, message }
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS"
    },
    body: JSON.stringify(body)
  }
}

export const customErrorResponse = (statusCode: number, message: string) => {
  return customResponse(statusCode, null, message)
}

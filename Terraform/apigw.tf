resource "aws_api_gateway_rest_api" "audio_formater_api" {
  name        = "audio_formater_api "
  description = "api for execute lambda"
}

resource "aws_api_gateway_method" "method" {
  rest_api_id   = aws_api_gateway_rest_api.audio_formater_api.id
  resource_id   = aws_api_gateway_resource.resource.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_resource" "resource" {
  path_part   = "formater"
  parent_id   = aws_api_gateway_rest_api.audio_formater_api.root_resource_id
  rest_api_id = aws_api_gateway_rest_api.audio_formater_api.id
}

resource "aws_api_gateway_integration" "audio_formater_integration" {
  rest_api_id             = aws_api_gateway_rest_api.audio_formater_api.id
  resource_id             = aws_api_gateway_rest_api.audio_formater_api.root_resource_id
  http_method             = aws_api_gateway_method.method.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.audio_formater_lambda.invoke_arn
}

# Lambda permision
resource "aws_lambda_permission" "apigw_lambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.audio_formater_lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn = "arn:aws:execute-api:${var.aws_region}:${var.accountId}:${aws_api_gateway_rest_api.audio_formater_api.id}/*/${aws_api_gateway_method.method.http_method}${aws_api_gateway_resource.resource.path}"
}

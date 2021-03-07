resource "aws_lambda_function" "audio_formater_lambda" {
  filename      = var.filename
  function_name = "audio_formater"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "index.mapAudio"
  runtime       = "nodejs12.x"
  publish       = true


  depends_on = [
    aws_iam_role_policy_attachment.lambda_logs,
    aws_cloudwatch_log_group.audio_formater
  ]
}
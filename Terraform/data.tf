# Variables
variable "aws_region" {
  description = "aws region to deploy"
  default     = "us-east-1"
}

variable "aws_provider_key" {
  description = "accessKey for aws"
}

variable "aws_provider_secret" {
  description = "secretKey for aws"
}
variable "filename" {
  description = ".zip function name"
  default     = "function.zip"
}


data "aws_caller_identity" "current" {}

output "account_id" {
  value = data.aws_caller_identity.current.account_id
}
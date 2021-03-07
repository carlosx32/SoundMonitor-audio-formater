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


variable "accountId" {}
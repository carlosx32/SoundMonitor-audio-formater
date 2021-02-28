# Variables
variable "aws_region" {
    description = "aws region to deploy"
    default = "us-east-1"
}

variable "aws_access_key_id" {
    description = "accessKey for aws"
}

variable "aws_secret_access_key" {
    description = "secretKey for aws"   
}
variable "filename" {
  description = ".zip function name"
  default = "function.zip"
}

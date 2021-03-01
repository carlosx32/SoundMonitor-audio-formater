terraform {
  backend "s3" {
    bucket  = "terraform-monitor-provide-states-files"
    key     = "s3event.tfstate"
    region  = "us-east-1"
  }
}
terraform {
  backend "s3" {
    bucket         = "joeyama-library-dev-tfstates"
    key            = "coco-library/dev/terraform.tfstate"
    region         = "ap-northeast-1"
    dynamodb_table = "TerraformLockState"
  }
}
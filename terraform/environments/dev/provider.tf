provider "aws" {
  region = "ap-northeast-1"
}

provider "aws" {
  alias  = "global_region"
  region = "us-east-1"
}
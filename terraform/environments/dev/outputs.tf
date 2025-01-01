output "aws_account_id" {
  value = "${data.aws_caller_identity.current.account_id}"
  description = "current aws account id"
}

output "aws_caller_arn" {
  value = "${data.aws_caller_identity.current.arn}"
  description = "current aws caller ARN"
}
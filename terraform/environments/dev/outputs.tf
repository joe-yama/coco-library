output "aws_account_id" {
  value = "${data.aws_caller_identity.current.account_id}"
  description = "current aws account id"
}

output "aws_caller_arn" {
  value = "${data.aws_caller_identity.current.arn}"
  description = "current aws caller ARN"
}

output "primary_name_server" {
  value = module.route53_zone.primary_name_server
  description = "Primary name server that created the SOA record."
}
output "name_servers_list" {
  value = module.route53_zone.name_servers_list
  description = "List of name servers which should be registerd to root hosted zone"
}
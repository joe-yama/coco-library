output "name_servers_list" {
  value = data.aws_route53_zone.current_env.name_servers
  description = "List of name servers which should be registerd to root hosted zone"
}

output "primary_name_server" {
  value = data.aws_route53_zone.current_env.primary_name_server
  description = "Primary name server that created the SOA record."
}
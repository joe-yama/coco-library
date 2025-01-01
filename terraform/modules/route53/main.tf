resource "aws_route53_zone" "current_env" {
  name = "${local.domain_name}"
}

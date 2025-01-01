data "aws_route53_zone" "current_env" {
  name = "${local.domain_name}"
  depends_on = [ aws_route53_zone.current_env ]
}
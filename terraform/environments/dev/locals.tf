locals {
  # A wildcard domain(ex: *.example.com) has to be added when using atomic deployments:
  aliases = [var.custom_domain, "*.${var.custom_domain}"]
}
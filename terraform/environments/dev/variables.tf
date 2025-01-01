variable "custom_domain" {
  description = "Your custom domain"
  type        = string
  default     = "joeyama.net"
}

# Assuming that the ZONE of your domain is already available in your AWS account (Route 53)
# https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/AboutHZWorkingWith.html
variable "custom_domain_zone_name" {
  description = "The Route53 zone name of the custom domain"
  type        = string
  default     = "joeyama.net."
}
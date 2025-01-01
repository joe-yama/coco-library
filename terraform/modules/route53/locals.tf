locals {
  domain_name = "${var.environment == "prod" ? "library.joeyama.net" : format("%s.%s", var.environment, "library.joeyama.net") }"
}
resource "aws_api_gateway_rest_api" "audio_formater_api" {
  body = jsonencode({
    "openapi" : "3.0.1",
    "info" : {
      "title" : "audio_formater_api ",
      "description" : "api for execute lambda",
      "version" : "2021-03-07T20:27:32Z"
    },
    "servers" : [
      {
        "url" : "https://nxcgnkzix8.execute-api.us-east-1.amazonaws.com/{basePath}",
        "variables" : {
          "basePath" : {
            "default" : "/test"
          }
        }
      }
    ],
    "paths" : {
      "/formater" : {
        "post" : {
          "responses" : {
            "200" : {
              "description" : "200 response",
              "headers" : {
                "Access-Control-Allow-Origin" : {
                  "schema" : {
                    "type" : "string"
                  }
                }
              },
              "content" : {
                "application/json" : {
                  "schema" : {
                    "$ref" : "#/components/schemas/Empty"
                  }
                }
              }
            }
          }
        },
        "options" : {
          "responses" : {
            "200" : {
              "description" : "200 response",
              "headers" : {
                "Access-Control-Allow-Origin" : {
                  "schema" : {
                    "type" : "string"
                  }
                },
                "Access-Control-Allow-Methods" : {
                  "schema" : {
                    "type" : "string"
                  }
                },
                "Access-Control-Allow-Headers" : {
                  "schema" : {
                    "type" : "string"
                  }
                }
              },
              "content" : {
                "application/json" : {
                  "schema" : {
                    "$ref" : "#/components/schemas/Empty"
                  }
                }
              }
            }
          }
        }
      }
    },
    "components" : {
      "schemas" : {
        "Empty" : {
          "title" : "Empty Schema",
          "type" : "object"
        }
      }
    }
  })
  name = "audio_formater_api"

  endpoint_configuration {
    types = ["REGIONAL"]
  }

}




# Lambda permision

#resource "aws_lambda_permission" "apigw_lambda" {
#  statement_id  = "AllowExecutionFromAPIGateway"
#  action        = "lambda:InvokeFunction"
#  function_name = aws_lambda_function.audio_formater_lambda.function_name
#  principal     = "apigateway.amazonaws.com"
  #source_arn    = "arn:aws:execute-api:${var.aws_region}:${var.accountId}:${aws_api_gateway_rest_api.audio_formater_api.id}/*/${aws_api_gateway_method.method.http_method}${aws_api_gateway_resource.resource.path}"
#}

resource "aws_api_gateway_deployment" "audio_formater_deploy" {
  rest_api_id = aws_api_gateway_rest_api.audio_formater_api.id
   triggers = {
    redeployment = sha1(jsonencode(aws_api_gateway_rest_api.audio_formater_api.body))
  }
  
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "prod" {
  deployment_id = aws_api_gateway_deployment.audio_formater_deploy.id
  rest_api_id   = aws_api_gateway_rest_api.audio_formater_api.id
  stage_name    = "prod"
}

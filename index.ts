import { extractInfo } from "./src-ts/extracInfo"
import { 
  APIGatewayProxyEvent, 
  APIGatewayProxyResult 
} from "aws-lambda";


export const mapAudio = async (httpInfo: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  let body = httpInfo.body
  let result = extractInfo(body)
  const response = {
    statusCode: 200,
    headers: {
    },
    body: JSON.stringify(result)
  };

  return response;

}

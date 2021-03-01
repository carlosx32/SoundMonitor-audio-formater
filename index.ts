import { extractInfo } from "./src-ts/extracInfo"
import { 
  APIGatewayProxyEvent, 
  APIGatewayProxyResult 
} from "aws-lambda";


export const mapAudio = async (httpInfo: APIGatewayProxyEvent| any): Promise<APIGatewayProxyResult> => {

  let body = JSON.parse(httpInfo.body)
  let result = extractInfo(body)
  const response = {
    statusCode: 200,
    headers: {
    },
    body: JSON.stringify(result)
  };

  return response;

}

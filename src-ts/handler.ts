import { audioInference } from "./class/audioInference"
import { InferenceResultAdapa } from "./class/audioInferenceAdapa"
import { inferenciadores } from "./class/enums/inferenciadoresEnum"



export const mapAudio = async (httpInfo:any): Promise<any> => {
  let result = extractInfo(JSON.parse(httpInfo.body))
  

  const response = {
    statusCode: 200,
    headers: {
    },
    body: JSON.stringify({
      status: "ok",
      data: result
     })
  };
  
  return response;

}

let extractInfo:any =(body:any) => {
  let result;



  if(body.inferencer_name && body.inference_result){
    result = mapper(body.inferencer_name,  body.inference_result);
  }
  else{
    result ="no inferencerName or result found";
  }
  return result;

}


const mapper = (inferenceName:string, result:InferenceResultAdapa  ) => {
  let standarInfo:audioInference = new audioInference();



  switch (inferenceName) {
    case inferenciadores.adapa:
      standarInfo._dato1 = result["1-1_small-sounding-engine"];
      
      break;
    default:
      audioInference;
  }

  return standarInfo


}
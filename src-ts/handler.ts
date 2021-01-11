import { audioInference } from "./class/audioInference"
import { InferenceResultAdapa } from "./class/audioInferenceAdapa"
import { inferenciadores } from "./class/enums/inferenciadoresEnum"

export const mapAudio = async (body:any): Promise<any> => {
  console.log("el cuerpo es: " ,body)

  let result = extractInfo(body)
  
  
  return {
    statusCode:200,
    body:result
  }

}

let extractInfo:any =(body:any) => {
  let result;



  if(body.inferencer_name && body.inference_result){
    result = mapper(body.inferencer_name,  body.inference_result);
  }
  else{
    result ="no inferencerName or result founded";
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
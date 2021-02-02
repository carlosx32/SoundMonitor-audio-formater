import { audioInference } from "./class/audioInference"
import { InferenceResultAdapa } from "./class/audioInferenceAdapa"
import { inferenciadores } from "./class/enums/inferenciadoresEnum"



export const mapAudio = async (httpInfo: any): Promise<any> => {

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

let extractInfo: any = (body: any) => {
  let result;

  if (body.inferencer_name && body.inference_result) {
    result = mapper(body.inferencer_name, body.inference_result);
  }
  else {
    result = "no inferencerName or result found";
  }
  return result;

}


const mapper = (inferenceName: string, result: InferenceResultAdapa): audioInference => {
  let standarInfo: audioInference = new audioInference();

  switch (inferenceName) {
    case inferenciadores.adapa:
      standarInfo._engine = result["1_engine"];
      standarInfo._machiney_impact = result["2_machinery-impact"];
      standarInfo._non_machiney_impact = result["3_non-machinery-impact"];
      standarInfo._powered_saw = result["4_powered-saw"];
      standarInfo._alert_signal = result["5_alert-signal"];
      standarInfo._music = result["6_music"];
      standarInfo._human_voice = result["7_human-voice"];
      standarInfo._dog = result["8_dog"];
      break;
    default:
      audioInference;
  }

  return standarInfo


}
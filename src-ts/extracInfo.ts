import { audioInference } from "./class/audioInference";
import { InferenceResultAdapa } from "./class/audioInferenceAdapa";
import { inferenciadores } from "./class/enums/inferenciadoresEnum";

export const extractInfo: any = (body: string) => {
    let result;
    let infoBody = JSON.parse(body)  

    if (infoBody.inferencer_name && infoBody.inference_result) {
      result = mapper(infoBody.inferencer_name, infoBody.inference_result);
    }
    else {
      result = "no inferencerName or result found";
    }
    return result;
  
  }
  
  
  export const mapper = (inferenceName: string, result: InferenceResultAdapa): audioInference => {
    let standarInfo: audioInference = new audioInference(0,0,0,0,0,0,0,0);
  
    switch (inferenceName) {
      case inferenciadores.ADAPA:
        standarInfo._engine = result["1_engine"];
        standarInfo._machiney_impact = result["2_machinery-impact"];
        standarInfo._non_machiney_impact = result["3_non-machinery-impact"];
        standarInfo._powered_saw = result["4_powered-saw"];
        standarInfo._alert_signal = result["5_alert-signal"];
        standarInfo._music = result["6_music"];
        standarInfo._human_voice = result["7_human-voice"];
        standarInfo._dog = result["8_dog"];
        break;
      case inferenciadores.INFERENCER_TEST:
        break;
      default:
    }
    return standarInfo;
  }

import { APIGatewayProxyEvent } from "aws-lambda";
import { expect } from "chai";
import {mapAudio} from "../index"


describe("The handler function should map audios From adapa", () => {
    let deviceInfo1:any ;
    
    beforeEach(() =>  {
        deviceInfo1 = require("./resources/device.json")
    });

    it("Function should return message when no inferences name and result", async () => {
        let httpInfo:APIGatewayProxyEvent;
        httpInfo.body =  JSON.stringify({"obj":"mensaje"})
        let res = await mapAudio(httpInfo)
        res = JSON.parse(res.body)
        expect(res).to.be.equal("no inferencerName or result found")
        
    });

    it("Function should return new inference object", async () => {

        let httpInfo:APIGatewayProxyEvent;
        httpInfo.body =  JSON.stringify( deviceInfo1)
        let res = await mapAudio(httpInfo)

        res= JSON.parse(res.body);

        expect(JSON.parse(res.body).dato1).to.be.equal(0.0138548)
    });


});

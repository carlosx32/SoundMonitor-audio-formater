
import { expect } from "chai";
import {mapAudio} from "../handler"


describe("The handler function should map audios From adapa", () => {
    let deviceInfo1:any ;
    
    beforeEach(() =>  {
        deviceInfo1 = require("./resources/device.json")
    });

    it("Function should return message when no inferences name and result", async () => {
        let res = await mapAudio(   {body : JSON.stringify({"obj":"mensaje"}) })
        res= JSON.parse(res.body)
        expect(res).to.be.equal("no inferencerName or result found")
        
    });

    it("Function should return new inference object", async () => {
        let res = await mapAudio({body : JSON.stringify( deviceInfo1) });
        res= JSON.parse(res.body);

        expect(res.dato1).to.be.equal(0.0138548)
    });


});


import { expect } from "chai";
import {mapAudio} from "../handler"


describe("The handler function should map audios From adapa", () => {
    let deviceInfo1:any ;
    
    beforeEach(() =>  {
        deviceInfo1 = require("./resources/device.json")

    });

    it("Function should return message when no inferences name and result", async () => {
        let res = await mapAudio("hola")
        expect(res.body).to.be.equal("no inferencerName or result found")

    });

    it("Function should return new inference object", async () => {
        let res = await mapAudio(deviceInfo1);
        expect(res.body.dato1).to.be.equal(0.0138548)
    });


});

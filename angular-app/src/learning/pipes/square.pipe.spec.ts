import { SquarePipe } from "./square.pipe"


describe("Square pipe suite", ()=>{
    it('create instance', ()=>{
        const pipe = new SquarePipe()
        expect(pipe).toBeTruthy
    })


    it('check square', ()=>{

        const pipe = new SquarePipe()
        const actual= pipe.transform(15)
        expect(actual).toEqual(225)
    })
})
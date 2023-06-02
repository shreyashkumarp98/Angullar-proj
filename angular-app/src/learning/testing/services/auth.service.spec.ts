import {AuthService} from './auth.service'

describe("Service; auth", ()=>{
    let service:AuthService

    beforeAll(()=>{
        console.log("it fires once for initilization")
    })
    afterAll(()=>{
        console.log("clean up operation")
    })

    beforeEach(()=>{
        service = new AuthService()
        console.log("instance created")
    }) 

    afterEach(()=>{
        console.log('after each fired......clear cache')
        //service=null
        localStorage.removeItem('jwt')
    })

    it ('should return true if jwt token exists', ()=>{
        window.localStorage.setItem('jwt', '12345')
        expect(service.isAuth()).toBeTruthy()

    })

    it('should return false if jwt token does not exist', ()=>{
        expect(service.isAuth()).toBeFalsy()
    })
})
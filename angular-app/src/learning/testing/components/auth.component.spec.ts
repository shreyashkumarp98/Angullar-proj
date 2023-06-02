import { AuthService } from "../services/auth.service";
import {AuthComponent} from './auth.component';

describe('Testing auth - integration testing', ()=> {

    it("isAuth test", ()=> {
       // window.localStorage.setItem('jwt', '12345')
        let auth= new AuthService()
        let comp= new AuthComponent(auth)
        let actual = comp.needsLogin()
        expect (actual).toBeTruthy()
    })
})
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AuthService {
    loggedIn = false;

    private logInSource = new Subject<boolean>();
    loggedIn$ = this.logInSource.asObservable();

    isAuthenticated(){
        const promise = new Promise(
            (resolve, _reject)=> {
            setTimeout(()=> {
                resolve(this.loggedIn);
                }, 100);
            }
        );
        return promise;
    }

    getAuthenticationStatus(){
        return this.loggedIn;
    }

    Login(){
        this.loggedIn = true;
        this.logInSource.next(this.loggedIn);
    }

    logout(){
        this.loggedIn = false;
    }
}
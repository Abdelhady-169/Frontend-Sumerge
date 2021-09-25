import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, 
    CanActivate, 
    RouterStateSnapshot,
    Router, 
    CanActivateChild}
    from "@angular/router";
    
import { Observable } from "rxjs";
import { AuthService } from './auth-service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router) {}

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (await this.authService.isAuthenticated() === true){
                        return true;
                }   else {
                    this.router.navigate(['/']);
                }
                return false;           
    }
}
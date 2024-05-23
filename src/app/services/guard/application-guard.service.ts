import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';



@Injectable({
  providedIn: 'root'
})
 class ApplicationGuardService  {
constructor(
  private userService: UserService
)
{}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): boolean {
    // Your canActivate logic here
    return this.userService.isUserLoggedAndAccessTokenValid(); // Replace this with your actual logic
  }
 }

export const canActivateGuard : CanActivateFn=(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean => {
return inject(ApplicationGuardService).canActivate(route,state);
}



import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
 class ApplicationGuardService  {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): boolean {
    // Your canActivate logic here
    return true; // Replace this with your actual logic
  }
 }

export const canActivateGuard : CanActivateFn=(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean => {
return inject(ApplicationGuardService).canActivate(route,state);
}



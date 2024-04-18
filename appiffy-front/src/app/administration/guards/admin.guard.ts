import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (typeof localStorage !== 'undefined') {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            // User is already authenticated, redirect to the admin page
            this.router.navigate(['/dashboard']);
            return false;
        }
    } 
    // If no access token is found or localStorage is not available, allow navigation to the route
    return true;
}
}
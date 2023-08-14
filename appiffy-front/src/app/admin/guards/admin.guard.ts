import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // User is already authenticated, redirect to the admin page
      this.router.navigate(['/admin']);
      return false;
    }
    return true;
  }
}
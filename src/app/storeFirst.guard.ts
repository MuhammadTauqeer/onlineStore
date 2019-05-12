import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { StoreNavComponent } from './store/storeNav.component';

@Injectable()

export class StoreFirstGuard {
    private firstNavigation = true;

    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if (this.firstNavigation) {
                this.firstNavigation = false;
                if (route.component !== StoreNavComponent) {
                    this.router.navigateByUrl('/');
                    return false;
                }
            }
            return true;
        }
    }

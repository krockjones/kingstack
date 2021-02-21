import { ChangeDetectorRef, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MediaMatcher} from '@angular/cdk/layout';
import {InlineNavBarComponent} from '../inline-nav-bar/inline-nav-bar.component';
import {MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent {
@ViewChild('snav') sideNav: MatSidenav;

  private siteName: string;
  navbar: InlineNavBarComponent;

  // ngOnDestroy(): void {
  //   this.mobileQuery.removeListener(this._mobileQueryListener);
  // }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

   mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private breakpointObserver: BreakpointObserver) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.siteName = 'KingStack Farm';
  }

   getSiteName(): string {return this.siteName; }


   isSideNavOpen(): boolean {
    return this.sideNav.opened;
   }

  onActivate(componentRef: Component): Component {
    if (componentRef instanceof InlineNavBarComponent) {
      this.navbar = componentRef;
      this.navbar.adjustFixedNav(this.isSideNavOpen());
      return componentRef;
    }
    else {
      return componentRef;
    }
  }
}

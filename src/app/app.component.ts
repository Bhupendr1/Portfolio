import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import{MatSidenavModule} from '@angular/material/sidenav'
import{MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [  CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
   MatSidenavModule,     // ✅ Required for <mat-sidenav-content>
    MatListModule,
  ],

  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'scale(0.98)' }),
        animate('400ms cubic-bezier(.25,.8,.25,1)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ],
  standalone: true
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;  // ← This line resolves the TS2339 error
  title:string="My Portfolio";
  sidenavMode: 'over' | 'side' = 'side';
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver,private contexts: ChildrenOutletContexts) {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
        this.sidenavMode = this.isMobile ? 'over' : 'side';
      });
  }

  closeOnNavigate() {
    if (this.isMobile) {
      this.sidenav.close();  // Now TypeScript knows what sidenav is!
    }
  }
  prepareRoute() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}


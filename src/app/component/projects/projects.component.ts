import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Pig Dice Game',
      tech: 'JavaScript, CSS',
      description: 'Interactive dice game with custom animations.',
      link: ''
    },
    {
      title: 'Obys Clone',
      tech: 'Three.js, Angular',
      description: 'Visual agency-style site with 3D animations.',
      link: ''
    },
    {
      title: 'Diwali Lucky Draw',
      tech: 'Angular, SVG',
      description: 'Vendor engagement platform for festive campaigns.',
      link: ''
    },
    {
      title: 'Vehicle Bidding Portal',
      tech: 'Angular, Firebase',
      description: 'Auction platform with OTP auth and token bidding.',
      link: ''
    },
    {
      title: 'IFSM Portal (Govt Project)',
      tech: 'Tech Stack: Angular, TypeScript, RxJS, HTML, CSS',
      description: 'Independently designed and developed two core modules—Employee Management and Pension Portal—within the broader IFMS (Integrated Financial Management System) for digital governance.',
      link: ''
    }
    , {
      title: 'SNA Migration Project',
      tech: 'Tech Stack: ASP.NET, SQL',
      description: 'Worked on migrating core functionalities from traditional architecture to ASP.NET. Enhanced maintainability and modular design while collaborating on compliance workflows for digital governance.',
      link: ''
    }

  ];
}

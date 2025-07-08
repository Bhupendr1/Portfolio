import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'SK Finance Ltd',
      duration: 'Jan 2024 – Present',
      responsibilities: [
        'Built Yard Insurance Portal',
        'Developed Lence and Locker apps',
        'Created business dashboards'
      ]
    },
    {
      company: 'Velocis Systems Pvt Ltd',
      duration: 'Jul 2023 – Dec 2023',
      responsibilities: [
        'Created reusable Angular components',
        'Optimized app performance and routing'
      ]
    },
    {
      company: 'SISL Infotech',
      duration: 'Dec 2022 – Jun 2023',
      responsibilities: [
        'Built real-time dashboards for finance',
        'Integrated role-based security layers'
      ]
    },
    {
      company: 'Speed Infinite IT Solutions',
      duration: 'Oct 2019 – Nov 2022',
      responsibilities: [
        'Designed GSAP animations and 3D interfaces',
        'Developed creative websites using Three.js'
      ]
    }
  ];

}

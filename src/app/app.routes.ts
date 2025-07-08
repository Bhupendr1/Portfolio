import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeroComponent } from './component/hero/hero.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ExtraSkillComponent } from './component/extra-skill/extra-skill.component';
import { CertificaeComponent } from './component/certificae/certificae.component';
export const APP_ROUTES: Routes = [
  { path: '', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'extraskill', component: ExtraSkillComponent },
  { path: 'certificate', component: CertificaeComponent },

];
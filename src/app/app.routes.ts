import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent) },
    { path: 'about', loadComponent: () => import('./features/about/about.component').then((c) => c.AboutComponent) },
    { path: 'project', loadComponent: () => import('./features/project/project.component').then((c) => c.ProjectComponent) },
    { path: 'resume', loadComponent: () => import('./features/resume/resume.component').then((c) => c.ResumeComponent) }
];

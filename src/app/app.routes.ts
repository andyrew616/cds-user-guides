import { Routes } from '@angular/router';
import { MainGuideComponent } from './main-guide/main-guide.component';
import { GuideSectionComponent } from './guide-section/guide-section.component';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'guide/:id', component: GuideSectionComponent },
      { path: 'guide/:id/section/:sectionId', component: GuideSectionComponent }
    ]
  }
];

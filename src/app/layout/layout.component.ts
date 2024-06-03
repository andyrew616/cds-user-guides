import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { GuideService } from '../guide.service';
import { Guide, GuideSection } from '../models/guide.model';
import { Observable } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class LayoutComponent implements OnInit {
  guides$: Observable<Guide[]> | undefined;
  sections: GuideSection[] = [];
  searchControl = new FormControl('');

  constructor(private guideService: GuideService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Fetch the list of guides
    this.guides$ = this.guideService.getGuides();

    // Listen to router events to handle navigation changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap(() => this.route.firstChild?.paramMap || [])
    ).subscribe(params => {
      const guideId = params.get('id');
      if (guideId) {
        this.guideService.getGuide(guideId).subscribe(guide => {
          if (guide) {
            this.sections = guide.sections;
          }
        });
      } else {
        this.sections = [];
      }
    });

    // Update guides based on search query
    this.searchControl.valueChanges.subscribe(query => {
      if (query) {
        this.guides$ = this.guideService.searchGuides(query);
      } else {
        this.guides$ = this.guideService.getGuides();
      }
    });
  }
}

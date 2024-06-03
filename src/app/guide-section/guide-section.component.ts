import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuideService } from '../guide.service';
import { Guide, GuideSection } from '../models/guide.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-guide-section',
  templateUrl: './guide-section.component.html',
  styleUrls: ['./guide-section.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class GuideSectionComponent implements OnInit {
  guide$!: Observable<Guide | undefined>;
  section: GuideSection = { id: '', title: '', content: '', guideId: '' };

  constructor(
    private route: ActivatedRoute,
    private guideService: GuideService
  ) {}

  ngOnInit(): void {
    this.guide$ = this.route.paramMap.pipe(
      switchMap(params => this.guideService.getGuide(params.get('id')!))
    );

    this.guide$.subscribe(guide => {
      if (guide) {
        const sectionId = this.route.snapshot.paramMap.get('sectionId') || '';
        this.section = guide.sections.find(s => s.id === sectionId) || { id: '', title: '', content: '', guideId: '' };
      }
    });
  }
}

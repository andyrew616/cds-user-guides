import { Component, OnInit } from '@angular/core';
import { GuideService } from '../guide.service';
import { Guide } from '../models/guide.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-main-guide',
  templateUrl: './main-guide.component.html',
  styleUrls: ['./main-guide.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MainGuideComponent implements OnInit {
  guides$!: Observable<Guide[]>;

  constructor(private guideService: GuideService) {}

  ngOnInit(): void {
    this.guides$ = this.guideService.getGuides();
  }
}

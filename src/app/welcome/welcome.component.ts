import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GuideService } from '../guide.service';
import { Guide } from '../models/guide.model';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule]
})
export class WelcomeComponent implements OnInit {
  guides$!: Observable<Guide[]>;

  constructor(private guideService: GuideService) { }

  ngOnInit(): void {
    this.guides$ = this.guideService.getGuides();
  }
}

import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Guide } from '../models/guide.model';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] // Add RouterModule here
})
export class TableOfContentsComponent {
  @Input() guide?: Guide;
}

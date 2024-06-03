import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Guide } from './models/guide.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  private guidesUrl = 'assets/mock-guides.json'; // URL to mock guides JSON file

  constructor(private http: HttpClient) { }

  getGuides(): Observable<Guide[]> {
    return this.http.get<Guide[]>(this.guidesUrl).pipe(
      catchError(this.handleError<Guide[]>('getGuides', []))
    );
  }

  getGuide(id: string): Observable<Guide | undefined> {
    return this.http.get<Guide[]>(this.guidesUrl).pipe(
      map(guides => {
        const guide = guides.find(guide => guide.id === id);
        console.log('Fetched Guide:', guide); // Add this line to debug
        return guide;
      })
    );
  }
  searchGuides(query: string): Observable<Guide[]> {
    return this.getGuides().pipe(
      map((guides: Guide[]) => guides.filter(guide => 
        guide.title.toLowerCase().includes(query.toLowerCase()) ||
        guide.sections.some((section: { title: string; }) => section.title.toLowerCase().includes(query.toLowerCase()))
      ))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}

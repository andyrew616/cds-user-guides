import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { AppRoutes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutes), // Set up routes here
    provideHttpClient(), provideAnimationsAsync() // Provide HttpClientModule here
  ]
}).catch(err => console.error(err));

import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppModule } from './app/app-module';
import { AppComponent } from './app/app.component';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
  
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // ✅ hinzufügen
  ]
});
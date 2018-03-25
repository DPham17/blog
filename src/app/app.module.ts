import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
// import { MaterialModule } from './material.module';
// import { MatCardModule } from '@angular/material';
// import { MatListModule } from '@angular/material';

// Declarations
import { AppComponent } from './app.component';
import { LandingComponent } from './landing-page/landing.component';
import { ResumeComponent } from './resume-page/resume.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ResumeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

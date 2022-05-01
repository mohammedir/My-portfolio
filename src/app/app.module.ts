import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './profile/header/header.component';
import { FooterComponent } from './profile/footer/footer.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { AboutComponent } from './profile/about/about.component';
import { ContactComponent } from './profile/contact/contact.component';
import { EducationComponent } from './profile/education/education.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { IntroComponent } from './profile/intro/intro.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    ExperienceComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

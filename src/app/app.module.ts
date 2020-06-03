import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileService } from './service/profile.service';
import { HeadlineComponent } from './component/headline/headline.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactComponent } from './component/contact/contact.component';
import { SkillsComponent } from './component/skills/skills.component';
import { AboutComponent } from './component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    ExperienceComponent,
    FooterComponent,
    ContactComponent,
    SkillsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

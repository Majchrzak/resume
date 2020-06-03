import { Component } from '@angular/core';
import { ProfileService } from './service/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  experience$ = this.profileService.experience$;
  contribution$ = this.profileService.contribution$;

  constructor(
    private readonly profileService: ProfileService
  ) {
  }

}

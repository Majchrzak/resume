import { Component } from '@angular/core';
import { ProfileService } from './service/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  overview$ = this.profileService.overview$;
  experience$ = this.profileService.experience$;
  contribution$ = this.profileService.contribution$;
  certification$ = this.profileService.certification$;

  constructor(
    private readonly profileService: ProfileService
  ) {
  }

}

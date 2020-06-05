import { Component } from '@angular/core';
import { ProfileService } from './service/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  about$ = this.profileService.about$;
  overview$ = this.profileService.overview$;
  skills$ = this.profileService.skills$;
  experience$ = this.profileService.experience$;
  contribution$ = this.profileService.contribution$;
  certification$ = this.profileService.certification$;
  language$ = this.profileService.language$;
  clause$ = this.profileService.clause$;

  constructor(
    private readonly profileService: ProfileService
  ) {
  }

}

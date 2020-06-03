import { Component } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experience$ = this.profileService.experience$;

  constructor(
    private readonly profileService: ProfileService
  ) { }

}

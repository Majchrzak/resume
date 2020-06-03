import { Component, Input } from '@angular/core';
import { ProfileExperienceModel } from 'src/app/model/profile-experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  @Input()
  experience: ProfileExperienceModel;

}

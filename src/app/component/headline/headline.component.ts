import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent {

  overview$ = this.profileService.overview$;

  constructor(
    private readonly profileService: ProfileService
  ) { }

}

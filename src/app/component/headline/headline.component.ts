import { Component, Input } from '@angular/core';
import { ProfileOverviewModel } from 'src/app/model/profile-overview.model';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent {

  @Input()
  overview: ProfileOverviewModel;

}

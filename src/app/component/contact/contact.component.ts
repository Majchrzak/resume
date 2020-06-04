import { Component, Input } from '@angular/core';
import { ProfileOverviewModel } from 'src/app/model/profile-overview.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @Input()
  overview: ProfileOverviewModel;

}

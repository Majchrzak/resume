import { Component, Input } from '@angular/core';
import { ProfileLanguageModel } from 'src/app/model/profile-language.model';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  @Input()
  language: ProfileLanguageModel[];

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ProfileModel } from '../model/profile.model';
import { profile } from '../../assets/profile.json';

@Injectable()
export class ProfileService {
    private readonly state = new BehaviorSubject<ProfileModel>(profile);

    overview$ = this.state.pipe(
        map(it => it.overview),
        distinctUntilChanged()
    );

    experience$ = this.state.pipe(
        map(it => it.experience),
        distinctUntilChanged()
    );

    contribution$ = this.state.pipe(
        map(it => it.contribution),
        distinctUntilChanged()
    );

    skills$ = this.state.pipe(
        map(it => it.skills),
        distinctUntilChanged()
    );

}

import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ProfileModel } from '../model/profile.model';
import { profile } from '../../assets/profile.json';

@Injectable()
export class ProfileService {
    private readonly state = new ReplaySubject<ProfileModel>(1);

    overview$ = this.state.pipe(
        map(it => it.overview),
        distinctUntilChanged()
    );

    constructor() {
        this.state.next(profile);
    }
}
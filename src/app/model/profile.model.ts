import { ProfileOverviewModel } from './profile-overview.model';
import { ProfileExperienceModel } from './profile-experience.model';

export interface ProfileModel {
    overview: ProfileOverviewModel;
    experience: ProfileExperienceModel[];
    contribution: ProfileExperienceModel[];
    skills: string[];
}

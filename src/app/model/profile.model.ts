import { ProfileOverviewModel } from './profile-overview.model';
import { ProfileExperienceModel } from './profile-experience.model';
import { ProfileLanguageModel } from './profile-language.model';

export interface ProfileModel {
    about: string;
    overview: ProfileOverviewModel;
    experience: ProfileExperienceModel[];
    contribution: string[];
    certification: string[];
    skills: string[];
    language: ProfileLanguageModel[];
    clause: string;
}

import { Routes } from '@angular/router';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';


export const routes: Routes = [
    {path: '', component: MaincontentComponent},
    {path: 'imprint', component: ImpressumComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent}
];

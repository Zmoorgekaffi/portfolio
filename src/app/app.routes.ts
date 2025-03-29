import { Routes } from '@angular/router';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { ImpressumComponent } from './components/impressum/impressum.component';


export const routes: Routes = [
    {path: '', component: MaincontentComponent},
    {path: 'impressum', component: ImpressumComponent}
];

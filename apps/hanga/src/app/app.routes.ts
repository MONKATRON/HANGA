import { Route } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { ShowListComponent } from './channel/ShowList/show-list.component';
import { ShowViewComponent } from './channel/ShowView/show-view.component';

export const appRoutes: Route[] = [
    { path: '', redirectTo: 'landing', pathMatch: 'full'},
    { path: 'landing', component: LandingPageComponent },
    { path: 'list', component: ShowListComponent },
    { path: 'detail/:index', component: ShowViewComponent },
];

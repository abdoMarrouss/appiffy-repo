import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './home/about-us/about-us';
import { IndexComponent } from './home';
import { ServicesComponent } from './home/services';
import { ServicesDetailComponent } from './home/services-detail';
import { TeamComponent } from './home/team';
import { CareerComponent } from './home/career';
import { ContactUsComponent } from './home/contact-us';
import { TermsConditionsComponent } from './home/terms-conditions';
import { PrivacyPolicyComponent } from './home/privacy-policy';
import { FaqComponent } from './home/faq';
import { ErrorComponent } from './home/error';
import { UserComponent } from './admin/components/userComponent/user/user.component';


const routes: Routes = [
    { path: '', component: IndexComponent, title: 'Appiffy' },
    { path: 'services', component: ServicesComponent, title: 'Appiffy | Services ' },
    { path: 'services-detail', component: ServicesDetailComponent, title: 'Services Detail ' },
    { path: 'team', component: TeamComponent, title: 'Team ' },
    { path: 'about-us', component: AboutUsComponent, title: 'About Us ' },
    { path: 'career', component: CareerComponent, title: 'Career ' },
    { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us ' },
    { path: 'terms-conditions', component: TermsConditionsComponent, title: 'Terms Conditions ' },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Privacy Policy ' },
    {path: 'user', component: UserComponent},

    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}

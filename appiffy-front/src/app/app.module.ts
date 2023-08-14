import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

//swiper
import { SwiperModule } from 'swiper/angular';

// counter
import { CountUpModule } from 'ngx-countup';

// lightbox
import { LightboxModule } from 'ngx-lightbox';

// apexchart
import { NgApexchartsModule } from 'ng-apexcharts';

// store
import { StoreModule } from '@ngrx/store';
import { indexReducer } from './store/index.reducer';

// service
import { AppService } from './service/app.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Layout
import { HeaderComponent } from './layout/header';
import { FooterComponent } from './layout/footer';

import { TestimonialComponent } from './components/testimonial';
import { BlogSliderComponent } from './components/blog-slider';
import { OfficeSwiperComponent } from './components/office-swiper';
import { ProjectSliderComponent } from './components/project-slider';
import { CounterComponent } from './components/counter';
import { FaqAccordionComponent } from './components/faq-component';
import { AboutUsComponent } from './home/about-us/about-us';
import { ModalDialog } from './components/modal-dialog';
import { ErrorComponent } from './home/error';
import { ContactusComponent } from './components/contactus-component';
import { ServicesDetailComponent } from './home/services-detail';
import { TeamComponent } from './home/team';
import { CareerComponent } from './home/career';
import { ContactUsComponent } from './home/contact-us';
import { TermsConditionsComponent } from './home/terms-conditions';
import { PrivacyPolicyComponent } from './home/privacy-policy';
import { FaqComponent } from './home/faq';
import { AdminModule } from './admin/admin.module';
import { TestCompo } from './layout/test';
import { ServicesComponent } from './home/services-page/services';
import { IndexComponent } from './home/index-page';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        ModalDialog,
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ErrorComponent,
        IndexComponent,
        ContactusComponent,
        ServicesComponent,
        ServicesDetailComponent,
        TeamComponent,
        AboutUsComponent,
        CareerComponent,
        ContactUsComponent,
        TermsConditionsComponent,
        PrivacyPolicyComponent,
        FaqComponent,
        TestimonialComponent,
        BlogSliderComponent,
        OfficeSwiperComponent,
        ProjectSliderComponent,
        CounterComponent,
        FaqAccordionComponent,
        TestCompo
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MatIconModule,
        AppRoutingModule,
        SwiperModule,
        CountUpModule,
        LightboxModule,
        NgApexchartsModule,
        AdminModule,
        StoreModule.forRoot({ index: indexReducer }),
    ],
    providers: [AppService, Title,{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent],
})
export class AppModule {}

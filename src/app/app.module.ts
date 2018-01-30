import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgBoxModule } from 'ngbox/ngbox.module';

import { SamplesService } from './services/samples.service';
import { NgBoxService } from 'ngbox/ngbox.service';

import { AppComponent } from './app.component';
import { SampleWorkComponent } from './sample-work/sample-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HeroContainerComponent } from './hero-container/hero-container.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleWorkComponent,
    AboutMeComponent,
    ContactComponent,
    HeroContainerComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    NgBoxModule,
    CommonModule
  ],
  schemas: [],
  providers: [SamplesService, NgBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { SamplesService } from './services/samples.service';

import { AppComponent } from './app.component';
import { SampleWorkComponent } from './sample-work/sample-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleWorkComponent,
    AboutMeComponent,
    ContactComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule
  ],
  providers: [SamplesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

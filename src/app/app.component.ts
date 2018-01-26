import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Hi, I'm Kathy.`;
  subheader = `A front end web developer by day and an amateur chef by night.`;
  show: boolean = false;
  carouselStartIndex: number = 0;

  openCarousel(event) {
  	// Flag to open carousel
  	this.show = event.show;

  	// Set start index for carousel
  	this.carouselStartIndex = event.carouselStartIndex;
  }

  closeCarousel(event) {
  	this.show = event.show;
  }
}

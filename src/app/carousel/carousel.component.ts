import { Component, OnInit } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
	items: Array<any> = [];

  constructor() { 
  	this.items = [
  		{ name: 'editApproval', src: '../assets/sample-work/edit_approval.png', type: 'image'}, 
  		{ name: 'paywall', src: '../assets/sample-work/paywall.png', type: 'image'},
  		{ name: 'permissions', src: '../assets/sample-work/permissions.mp4', type: 'video'}
  	];
  }

  ngOnInit() {
  }

}

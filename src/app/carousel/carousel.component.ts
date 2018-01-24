import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { SamplesService } from '../services/samples.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() show: boolean;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

	samples: Array<object> = [];

  constructor(private samplesService: SamplesService) { }

  getSamples(): void {
    this.samples = this.samplesService.getSamples();
  }

  closeCarousel() {
    this.show = false;
    this.close.emit(this.show);
  }


  ngOnInit() {
    this.getSamples();
  }

}

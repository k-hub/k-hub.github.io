import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { SamplesService } from '../services/samples.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() show: boolean;
  @Input() carouselStartIndex: number;
  @Output() close: EventEmitter<object> = new EventEmitter<object>();

  // Master copy of correctly ordered array
  private _originalSamples: Array<object> = []; 
	samples: Array<object> = [];

  constructor(private samplesService: SamplesService) { }

  getSamples() {
    this.samplesService.getSamples().subscribe(samples => { 
      this._originalSamples = samples;
      this.samples = samples 
    });
  }

  closeCarousel() {
    this.show = false;
    this.close.emit({ show: false });
  }

  // Update carousel when start index is selected
  ngOnChanges(changes: SimpleChanges) {
    if (changes.show && changes.show.currentValue === false) {
      return;
    }

    const currentCarouselStartIndex = changes.carouselStartIndex ? changes.carouselStartIndex.currentValue : this.carouselStartIndex;
    const prevCarouselStartIndex = changes.carouselStartIndex ? changes.carouselStartIndex.previousValue : null;

    if (currentCarouselStartIndex !== 0 || (currentCarouselStartIndex !== prevCarouselStartIndex)) {
      const leadingPartialCarouselArr: any = this._originalSamples.slice(currentCarouselStartIndex);
      const remainingPartialCarouselArr: any = this._originalSamples.slice(0, currentCarouselStartIndex);
      const fullCarouselArr: any = leadingPartialCarouselArr.concat(remainingPartialCarouselArr);

      // Replace with reordered array
      this.samples = fullCarouselArr;
    }
  }

  ngOnInit() {
    this.getSamples();
  }
}

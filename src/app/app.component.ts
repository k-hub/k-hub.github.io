import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	tabs: Array<object> = [
		{ id: 'my-work', name: 'My Work' },
		{ id: 'about-me', name: 'About Me' },
		{ id: 'contact', name: 'Contact' }
	];

	scrollToContent(elementId) {
		const element = document.getElementById(elementId);
		element.scrollIntoView();
	}

	getCopyrightInfo() {
		const year = new Date().getFullYear();
		return `Handmade by me © ${year}`
	}
}

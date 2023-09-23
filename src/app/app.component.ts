import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bc_angular';

  constructor( private renderer : Renderer2){}

  ngAfterViewInit() {

  
    const script = this.renderer.createElement('script');
    script.src = 'assets/script.js';
    document.body.appendChild(script);
  }
}

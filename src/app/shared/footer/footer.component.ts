import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {  
  @ViewChild('footer') footer!: ElementRef;
  footerHeight = 0;
  //updatefooterHeight: any;

  ngAfterViewInit() {
    // this.updatefooterHeight();
  }

}

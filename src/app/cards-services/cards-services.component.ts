import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-services',
  templateUrl: './cards-services.component.html',
  styleUrls: ['./cards-services.component.css']
})
export class CardsServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}

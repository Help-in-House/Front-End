import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
    alert("Atenção! Esse site é estático e experimental, ou seja, apenas visual.")
  }
}


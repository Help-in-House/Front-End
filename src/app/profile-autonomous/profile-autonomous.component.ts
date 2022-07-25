import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-autonomous',
  templateUrl: './profile-autonomous.component.html',
  styleUrls: ['./profile-autonomous.component.css']
})
export class ProfileAutonomousComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}

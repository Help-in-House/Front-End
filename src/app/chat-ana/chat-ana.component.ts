import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-ana',
  templateUrl: './chat-ana.component.html',
  styleUrls: ['./chat-ana.component.css']
})
export class ChatAnaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}

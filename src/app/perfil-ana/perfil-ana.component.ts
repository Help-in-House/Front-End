import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-ana',
  templateUrl: './perfil-ana.component.html',
  styleUrls: ['./perfil-ana.component.css']
})
export class PerfilAnaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}

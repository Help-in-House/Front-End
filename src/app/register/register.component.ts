import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // mensagem: string = "Obrigado por se cadastrar"

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

  register(){
    alert("Obrigado por se cadastrar :)");
  }

}

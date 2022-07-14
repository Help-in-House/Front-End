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
  }

  register(){
    alert("Obrigado por se cadastrar :)");
  }

}

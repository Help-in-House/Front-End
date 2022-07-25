import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-autonomous',
  templateUrl: './register-autonomous.component.html',
  styleUrls: ['./register-autonomous.component.css']
})
export class RegisterAutonomousComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

  register(){
    alert("Cadastro Realizado com Sucesso! Fique de olho no seu e-mail para confirmação :)");
  }

}

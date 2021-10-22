import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/authentication/services/auth.service';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required, //validacio para que exista el campo
          Validators.email, //VAlidacion para que tenga formao de email
        ]),
        pass: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)

        ])
      }
    )
  }
  sendLogin(): void {
    const { email, pass } = this.formLogin.value //Enviar valores del formulario
    this._authService.sendCredentials(email, pass)

  }
}

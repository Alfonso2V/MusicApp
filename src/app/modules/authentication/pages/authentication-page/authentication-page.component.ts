import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/authentication/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css']
})
export class AuthenticationPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false

  constructor(private _authService: AuthService, private cookie: CookieService) { }

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
      // Credenciales correctas, codigos desde el 200 hasta <400
      .subscribe(responseOK => { /* Cuando se ingresan las credenciales correctas */
        const { tokenSession, data } = responseOK
        this.cookie.set('token', tokenSession, 10, '/')
        console.log("Correcta");
      },
        err => { /* Codigos mayores a 400 de que no son correctas las credenciales */
          this.errorSession = true
          console.log("Usuario", email, pass);
        })
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      (response) => {
        console.log(response);
        if (response.token) {
          sessionStorage.setItem('token', response.token);
        }
      },
      (error) => console.log('ha ocurrido un error', error),
      () => console.info('se ha completado la llamada del login')
    );
  }
}

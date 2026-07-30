import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatButtonModule, MatIcon],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isLoginTrue = signal(true);
  isPassword = signal(true);
  isPasswordShow = signal(false);

  onSubmit(form: NgForm, event: Event) { 
    event.preventDefault();
    this.isLoginTrue.set(false)
    console.log(form.value);
  }
}

import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registration',
  imports: [FormsModule, RouterLink, MatFormFieldModule, MatInputModule, MatIcon, MatButtonModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {

  isPasswortShow = signal(false);
  isPasswortWiederholungShow = signal(false);
  isPasswortValid = signal(true);

  onSubmit(form: NgForm, event: Event) { 
    event.preventDefault();
    if(form.value.passwort !== form.value.passwortWiederholung) {
      this.isPasswortValid.set(false);
      return;
    }
    console.log(form.value);
  }
}

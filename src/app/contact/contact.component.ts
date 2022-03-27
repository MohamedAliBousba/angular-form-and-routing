import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirect() {
    this.router.navigate(['/']);
  }
}

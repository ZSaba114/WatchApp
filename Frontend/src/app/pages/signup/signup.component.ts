import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,  HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

 constructor(private http: HttpClient, private router: Router) {}


 onSubmit() {
  const user = {
    username: this.username,
    email: this.email,
    password: this.password
  };

  this.http.post('http://localhost:3000/api/signup', user).subscribe(
    res => {
      console.log('Signup success', res);
      this.router.navigate(['/login']); 
    },
    err => console.error('Signup error', err)
  );
}

}
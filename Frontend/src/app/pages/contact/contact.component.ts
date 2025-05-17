import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, FormsModule,  CommonModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isMessageSent: boolean = false;

  onSubmit(): void {

    if (this.name && this.email && this.message) {
      this.isMessageSent = true; 
    }
  }
}
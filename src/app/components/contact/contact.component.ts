//imports
import { Component,  ViewChild } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';


//component decorator
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

//component class
export class ContactComponent {

  @ViewChild('name') nameInput!:NgModel;
  @ViewChild('email') emailInput!: NgModel;
  @ViewChild('checkbox') checkboxInput!: NgModel;

}

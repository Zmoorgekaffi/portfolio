//imports
import { HttpClient } from '@angular/common/http';
import { Component,  ViewChild, inject, ElementRef, viewChild } from '@angular/core';
import { NgModel, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateServiceService } from '../../services/translate-service.service';

//interfaces
interface FormData {
  name:NgModel,
  email:NgModel,
  message:NgModel
}

interface Post {
    endPoint:string,
    body: any,
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
}


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
  @ViewChild('message') messageInput!: NgModel;
  @ViewChild('checkbox') checkboxInput!: NgModel;

  translateService = inject(TranslateServiceService);

  http = inject(HttpClient);
  formData:{} = {};
  submitted:boolean = false;
  
  submitBtnWasClickedWithEmptyValuesForName:boolean = false;
  submitBtnWasClickedWithEmptyValuesForEmail:boolean = false;
  submitBtnWasClickedWithEmptyValuesForCheckbox:boolean = false;

  constructor(private router: Router){}

  post: Post = {
    endPoint: '',
    body: {},
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  routeToImprint() {
    this.router.navigateByUrl('/imprint');
  }

  submitData(contactForm: NgForm) {
    if(contactForm.submitted && contactForm.valid) {
      this.formData = this.alignFormData();
      this.setUpPost();
      this.http.post(this.post.endPoint, this.post.body(this.formData), this.post.options)
      .subscribe({
        next: (response) => {

          contactForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => this.formSuccessMessage(),
      });
    } 

    else {
      this.submitBtnWasClickedWithEmptyValuesForName = true;
      this.submitBtnWasClickedWithEmptyValuesForEmail = true;
      this.submitBtnWasClickedWithEmptyValuesForCheckbox = true;
    }
  }

  formSuccessMessage(): void {
    this.submitted = true;
  }

  alignFormData():FormData {
    return {
      name: this.nameInput.value,
      email: this.emailInput.value,
      message: this.messageInput.value,
    }
  }

  setUpPost() {
    this.post = {
      endPoint: 'https://andre-karyoti.com/sendMail.php',
      body: (payload: any) => JSON.stringify(payload),
      options: {
        headers: {
          'Content-Type': 'text/plain',
          responseType: 'text' as const,
        },
      },
    }
  }

  checkIfInputIsValid(inputCategory:string) {
    switch (inputCategory) {
      case 'name':
        if(this.nameInput.valid) {
          this.submitBtnWasClickedWithEmptyValuesForName = false;
        }
        break;
      case 'email':
        if(this.emailInput.valid) {
          this.submitBtnWasClickedWithEmptyValuesForEmail = false;
        }
        break;
      case 'checkbox':
        setTimeout(() => {
          if(this.checkboxInput.valid) {
            this.submitBtnWasClickedWithEmptyValuesForCheckbox = false;
          }
        }, 10);
        break;
      default:
        break;
    }
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
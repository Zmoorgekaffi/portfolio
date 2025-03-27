//imports
import { HttpClient } from '@angular/common/http';
import { Component,  ViewChild, inject } from '@angular/core';
import { NgModel, FormsModule, NgForm } from '@angular/forms';

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

  http = inject(HttpClient);
  formData:{} = {};

  /*mailTest = true;*/

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

  submitData(contactForm: NgForm) {
    if(contactForm.submitted && contactForm.valid /*&& !this.mailTest*/) {
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
        complete: () => console.info('send post complete'),
      });
    } 
    /*else if (contactForm.submitted && contactForm.form.valid && this.mailTest) {

      contactForm.resetForm();
    }*/
    else {
      alert('Please fill out the required fields to submit');
    }
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
      endPoint: 'http://andre-karyoti.com/sendMail.php',
      body: (payload: any) => JSON.stringify(payload),
      options: {
        headers: {
          'Content-Type': 'text/plain',
          responseType: 'text' as const,
        },
      },
    }
  }
}
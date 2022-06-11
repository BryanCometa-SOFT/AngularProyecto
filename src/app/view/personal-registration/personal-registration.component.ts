import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PersonalRegistrationService } from "./../../services/personal-registration.service";

@Component({
  selector: 'app-personal-registration',
  templateUrl: './personal-registration.component.html',
  styleUrls: ['./personal-registration.component.css']
})
export class PersonalRegistrationComponent implements OnInit {
  municipies: any = null;
  typeDocument: any = null;
  form: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    date: new FormControl("", [Validators.required]),
    typeDocument: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    document: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    check: new FormControl(""),
  });

  constructor(private personalRegistrationService: PersonalRegistrationService) { }

  ngOnInit(): void {
    this.getMunicipies();
    this.getTypeDocument();
  }
  async onSubmit() {
    console.log(this.form);
    console.log(this.form.value);
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor',
    });
    Swal.showLoading();
    Swal.close();
    if (this.form.invalid) {
      Swal.fire({
        title: "Error",
        icon: 'error',
        text: 'El formulario debe estar completo',
      });
      return;
    }
    await this.personalRegistrationService.savePersonalRegistration(this.form.value).subscribe({
      next: () => {
        Swal.close();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El registro fue guardado',
          showConfirmButton: false,
          timer: 2000,
          confirmButtonText: 'Yes, delete it!'
        });
      },
      error: () => {
        Swal.close();
        Swal.fire({
          icon: "error",
          text: "No fue guardado el registro",
          timer: 5000,
          confirmButtonText:"Ok"
        });
        this.form.reset();
      },
    });
  }
  async getMunicipies() {
    await this.personalRegistrationService.getMunicipies().subscribe({
      next: (response) => {
        console.log(response);
        this.municipies = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  async getTypeDocument() {
    await this.personalRegistrationService.getTypeDocument().subscribe({
      next: (response) => {
        console.log(response);
        this.typeDocument = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  /*
  swalAlert(text: String, icon: String, title: String) {
    Swal.fire({
      title: title,
      icon: icon,
      text: text,
    });
  }*/
}

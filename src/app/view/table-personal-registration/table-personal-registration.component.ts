import { Component, OnInit } from '@angular/core';
import { PersonalRegistrationService } from "./../../services/personal-registration.service";

@Component({
  selector: 'app-table-personal-registration',
  templateUrl: './table-personal-registration.component.html',
  styleUrls: ['./table-personal-registration.component.css']
})
export class TablePersonalRegistrationComponent implements OnInit {

  dataTable: any = null;
  constructor(private personalRegistrationService: PersonalRegistrationService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    await this.personalRegistrationService.getDataRegistration().subscribe({
      next: (response) => {
        console.log(response);
        this.dataTable = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}

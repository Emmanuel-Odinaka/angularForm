import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  

  onSubmit() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  ngOnInit(): void {}

  occupations = [
    'Frontend Developer',
    'Backend Developer',
    'Designer',
    'Devops Engineer',
  ];

  public countries: any = fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => response.json())
    .then((data) => (this.countries = data))
    .then(() => console.log(this.countries))
    .catch((err) => console.error(err));
}

// public countries: any = fetch('https://restcountries.eu/rest/v2/all')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

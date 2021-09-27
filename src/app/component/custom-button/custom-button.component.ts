import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent implements OnInit {
  @Input() childButton: any;
  constructor(private toastr: ToastrService) {}

  showSuccess(btnType: any) {
    this.toastr.success(`${btnType} is clicked`, 'Encentral Solutions! 😎😎');
  }

  ngOnInit(): void {}
}

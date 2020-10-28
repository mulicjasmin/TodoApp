import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    this.accountService.register(this.model).subscribe(response => {
      this.cancel();
      this.router.navigateByUrl('/tasks');
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }

}

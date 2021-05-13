import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {LoginService} from '../../services/login/login.service'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private loginservice:LoginService, private ngxSpinnerService: NgxUiLoaderService,) { }

  ngOnInit(): void {
  }

  logout() {
    this.ngxSpinnerService.start();
    this.loginservice.logoutUser()
    this.ngxSpinnerService.stop();
  }


}

import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service'
import {Usuario} from '../../models/login'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario ={
    PKUsuario: '',
    password:'',
    Perfil:''
  }
  constructor(private loginserve:LoginService,
     private router: Router, 
     private formBuilder: FormBuilder,
     private ngxSpinnerService: NgxUiLoaderService) { }

  ngOnInit(): void {
  }
  Iniciarseccion(){
    this.ngxSpinnerService.start();
    this.loginserve.loginUser(this.usuario.PKUsuario,this.usuario.password).subscribe(res=>{
      console.log(res)
      this.usuario = res.signedUser
      console.log(this.usuario);
      
      localStorage.setItem("perfil", JSON.stringify(this.usuario.Perfil) );
      this.loginserve.setUser(this.usuario.PKUsuario, res.token)
      this.ngxSpinnerService.stop();
      this.router.navigateByUrl('/Cancer-listar');
    },
    () => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Usuario y/o Contraseña incorrecto",
        showConfirmButton: true,
        allowOutsideClick: false, // NO PERMITE QUE SE CIERRE AL DAR CLIC POR FUERA
        
      })
      this.ngxSpinnerService.stop();
    })
  
  }


}

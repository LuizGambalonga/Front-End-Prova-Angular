import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  usuario = {} as Usuario;
  usuarios: Usuario[] | undefined;
  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.getUser();
  }
  saveUser(form: NgForm) {
    if (this.usuario.id !== undefined) {
      this.userService.updateUser(this.usuario).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.userService.saveUser(this.usuario).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os usuarios
  getUser() {
    this.userService.getUser().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }
  cleanForm(form: NgForm) {
    this.getUser();
    form.resetForm();
    this.usuario = {} as Usuario;
  }
}

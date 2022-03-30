import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-cliente-register',
  templateUrl: './cliente-register.component.html',
  styleUrls: ['./cliente-register.component.css']
})
export class ClienteRegisterComponent implements OnInit {
  
  cliente: Cliente;
  tipoCpf: boolean = true;
  tipoCnpj : boolean = false;
  cadastroSucesso: boolean = false;
  erros: String[] = [];
  constructor(private clienteService: ClienteService) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }
  incluirCliente(){
    this.clienteService.saveCliente(this.cliente).subscribe(response =>{
     this.cadastroSucesso = true;
     this.erros =[]
    }, error =>{
      this.erros = error;
      this.cadastroSucesso = false;
      console.log("error"+error)
    });
    
    }
}
 


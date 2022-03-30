import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] | undefined;
  cadastroDeletado: boolean = false;
  clienteAtualizadoSucesso: boolean = false;
  botaoSalvar : boolean = false;
  disabled : boolean = true;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getCliente();
  }
  getCliente() {
    this.clienteService.getCliente().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    });
  }
  DeleteCliente(cliente: Cliente){
    this.clienteService.DeleteCliente(cliente).subscribe(response =>{
      this.getCliente();
      this.cadastroDeletado= true;
    });
  }
  atualizarCliente(){
    this.botaoSalvar= !this.botaoSalvar;
    this.disabled= !this.disabled;
  }
  SalvarAtualizacaoCliente(cliente: Cliente){
    this.clienteService.updateCliente(cliente).subscribe( response =>{
      console.log(response)
      this.getCliente();
      this.clienteAtualizadoSucesso =true;
      this.disabled= true;
      this.botaoSalvar= false;
    })
  }
}

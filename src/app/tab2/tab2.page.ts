import { Component, OnInit } from '@angular/core';
//Impoera service de acesso a api

import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
//Variável que indentifica se temos usuarios para listar.



//Variavel com os dados que vieram da API
data: Array<any> = [];

  constructor(

//inicializa o serviço de acesso a api
private usersService: UsersService

  ) { }

  ngOnInit(): void {
//Obtendo os dados da Api usando o service
this.usersService.getUsers().subscribe((res: any) => {
//Se falhou na recepeção de status
if (res.status !== 'success') {
  console.error(`Falha: ${res.result}`);
  return false;
}
res.result.forEach((value: any) => {
  if (value !== null) {
    this.data.push(value);
  }
});
});
}
}

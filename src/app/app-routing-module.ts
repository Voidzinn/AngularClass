import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Calculadora } from './calculadora/calculadora';
import { ListarCliente } from './listar-cliente/listar-cliente';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { TelaPai } from './tela-pai/tela-pai';
import { TelaFilho1 } from './tela-filho1/tela-filho1';
import { TelaFilho2 } from './tela-filho2/tela-filho2';

const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'calculadora', component: Calculadora},
  {path: 'listar-cliente', component: ListarCliente},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'tela-pai', component: TelaPai, children: 
    [
    {path: 'filho1', component: TelaFilho1},
    {path: 'filho2', component: TelaFilho2},
    ]
  },
  {path: '**', component: PaginaNaoEncontrada}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

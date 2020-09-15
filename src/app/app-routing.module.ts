import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab404',
    loadChildren: () => import('./tab404/tab404.module').then( m => m.Tab404PageModule)
  },

  //Rota para rotas inexistentes sempre manter a ultima

  {
  path: '**',
  loadChildren: () => import('./tab404/tab404.module').then( m => m.Tab404PageModule)
},
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 
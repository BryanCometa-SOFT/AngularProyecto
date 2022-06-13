import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'online-quote',
    loadChildren: () => import('./online-quote/online-quote.module').then( m => m.OnlineQuoteModule)
  },
  { path: '**',
    redirectTo: 'online-quote'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

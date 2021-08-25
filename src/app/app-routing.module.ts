import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { RegisterOfferComponent } from './register-offer/register-offer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    children: [
      {
        path: '',
        component: ListOfferComponent
      },
    {
      path: 'register',
      children: [
        {
          path: '',
          component: RegisterOfferComponent
        },
      ]
    },
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

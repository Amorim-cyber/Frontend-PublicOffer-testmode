
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackViewComponent } from './back-view/back-view.component';
import { FrontViewComponent } from './front-view/front-view.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'Back',
    pathMatch: 'full'
  },

  {
    path: 'Back',
    children:[
      {
        path: '',
        component: BackViewComponent
      },
      {
        path: '11111',
        children:[
          {
            path: '',
            component: FrontViewComponent
          }
        ]
      },
      {
        path: '22222',
        children:[
          {
            path: '',
            component: FrontViewComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

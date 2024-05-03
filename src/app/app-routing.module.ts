
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './front-office/page-not-found/page-not-found.component';
import {BackOfficeComponent} from "./back-office/back-office.component";
import {FrontOfficeComponent} from "./front-office/front-office.component";

//  import { AuthGuard} from "./core/guards/auth.guard";





  // const routes: Routes = [



  //   { path: 'home', loadChildren : () =>import ('./front-office/front-office.module').then(m => m.FrontOfficeModule) },
  //   { path: 'admin', loadChildren : () =>import ('./back-office/back-office.module').then(m => m.BackOfficeModule)  },
  //   // {path:"",redirectTo:'/home',pathMatch:'full'},
  //   // {path:'**',component: PageNotFoundComponent},



     const routes: Routes = [


     {
         path: '',
         children: [{
           path: '',
           loadChildren: () => import('./front-office/front-office.module').then(x => x.FrontOfficeModule)
         }]
       },
       {
         path: 'admin',
         children: [{
           path: '',
           loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule)
         }]
       },
     ];

     /*
      {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
      },
      {
          path: 'home',
          loadChildren: () => import('./front-office/front-office.module').then(m => m.FrontOfficeModule)
      },
      {
          path: 'admin',
          loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule)
      },
        //  {path:'**',component: PageNotFoundComponent},

    ];

*/





    //  @NgModule({
    //   imports:[
    //   RouterModule.forRoot(routes)
    // ],
    //   exports: [RouterModule]
    // })

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
export class AppRoutingModule { }

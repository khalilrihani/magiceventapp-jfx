import { ReviewComponent } from './review/review.component';

import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { EventcreateComponent } from './eventcreate/eventcreate.component';
import { FrontOfficeComponent } from './front-office.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ListeventComponent } from './listevent/listevent.component';
import { ServiceComponent } from './service/service.component';
import { DeviComponent } from './devi/devi.component';
import { EspaceComponent } from './espace/espace.component';
import { LocationComponent } from './location/location.component';
import { PhotographeComponent } from './photographe/photographe.component';
import { ServeurComponent } from './serveur/serveur.component';
import { TraiteurComponent } from './traiteur/traiteur.component';
import { AnimateurComponent } from './animateur/animateur.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupbusinessUserComponent } from './signupbusiness-user/signupbusiness-user.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RouterModule, Routes } from '@angular/router';
import {ProfilespaceComponent} from "./ProfileUsers/profilespace/profilespace.component";
import {ProfilanimateurComponent} from "./ProfileUsers/profilanimateur/profilanimateur.component";
import {ProfillocationComponent} from "./ProfileUsers/profillocation/profillocation.component";
import {ProfilserveurComponent} from "./ProfileUsers/profilserveur/profilserveur.component";
import {ProfiltraiteurComponent} from "./ProfileUsers/profiltraiteur/profiltraiteur.component";
import {ProfilphotographeComponent} from "./ProfileUsers/profilphotographe/profilphotographe.component";
import {ListtraiteurComponent} from "./ProfileUsers/listtraiteur/listtraiteur.component";
import {ListserveurComponent} from "./ProfileUsers/listserveur/listserveur.component";
import {ListphotographeComponent} from "./ProfileUsers/listphotographe/listphotographe.component";
import {ListlocationComponent} from "./ProfileUsers/listlocation/listlocation.component";
import {ListanimateurComponent} from "./ProfileUsers/listanimateur/listanimateur.component";
import {ListespaceComponent} from "./ProfileUsers/listespace/listespace.component";
import {Home2Component} from "./home2/home2.component";
import {ReservationphotographeComponent} from "./ProfileUsers/reservationphotographe/reservationphotographe.component";
import {ReservationlocationComponent} from "./ProfileUsers/reservationlocation/reservationlocation.component";
import {ReservationanimateurComponent} from "./ProfileUsers/reservationanimateur/reservationanimateur.component";
import {ReservationespaceComponent} from "./ProfileUsers/reservationespace/reservationespace.component";
import {ReservationtraiteurComponent} from "./ProfileUsers/reservationtraiteur/reservationtraiteur.component";
import {ReservationserveurComponent} from "./ProfileUsers/reservationserveur/reservationserveur.component";



const routes: Routes = [


  { path: '',

    component: FrontOfficeComponent ,
    children: [
      { path: '',  component:HomeComponent },
      { path: 'service',  component:ServiceComponent },
      { path: 'CreatEvent', component: EventcreateComponent },
      { path: 'gallery',  component:GalleryComponent },
      { path: 'event',    component:ListeventComponent },
      { path: 'review',    component:ReviewComponent },
      { path: 'contact' ,   component:ContactComponent },
      { path: 'devi' ,   component:DeviComponent },
      { path: 'login/espace' ,   component:EspaceComponent },
      { path: 'login/animateur',   component:AnimateurComponent },
      { path: 'login/location' ,   component:LocationComponent},
      { path: 'login/photographe' ,   component:PhotographeComponent },
      { path: 'login/serveur' ,   component:ServeurComponent },
      { path: 'login/traiteur' ,   component:TraiteurComponent },
      // {path:'/*',component: PageNotFoundComponent},

      {path:'login' , component: LoginComponent},
      {path:'login/signup' , component:SignupComponent},
      {path:'login/signupbus-user' , component:SignupbusinessUserComponent},
      {path:'login/forgot_password' , component:ForgotComponent},


      // profile des espace
      {path:'espace/:id' , component:ProfilespaceComponent  },
      {path:'animateur/:id' , component:ProfilanimateurComponent  },
      {path:'location/:id' , component:ProfillocationComponent  },
      {path:'photographe/:id' , component:ProfilphotographeComponent  },
      {path:'traiteur/:id' , component:ProfiltraiteurComponent  },
      {path:'serveur/:id' , component:ProfilserveurComponent },

      //lists des user
      {path:'espace' , component:ListespaceComponent  },
      {path:'animateur' , component:ListanimateurComponent  },
      {path:'location' , component:ListlocationComponent  },
      {path:'photographe' , component:ListphotographeComponent  },
      {path:'traiteur' , component:ListtraiteurComponent  },
      {path:'serveur' , component:ListserveurComponent },

      // reservation
      {path:'reservationespace/:id' , component:ReservationespaceComponent  },
      {path:'reservationanimateur/:id' , component:ReservationanimateurComponent  },
      {path:'reservationlocation/:id' , component:ReservationlocationComponent  },
      {path:'reservationphotographe/:id' , component:ReservationphotographeComponent  },
      {path:'reservationtraiteur/:id' , component:ReservationtraiteurComponent  },
      {path:'reservationserveur/:id' , component:ReservationserveurComponent },


       ]}
      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }

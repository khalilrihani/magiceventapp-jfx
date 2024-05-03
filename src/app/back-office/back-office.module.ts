
// import { IonicModule } from '@ionic/angular';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from "./back-office.component";
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatChipsModule} from "@angular/material/chips";

import {A11yModule} from '@angular/cdk/a11y';
import {ObserversModule} from '@angular/cdk/observers';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ServeurbackComponent } from './serveurback/serveurback.component';
import { EspacebackComponent } from './espaceback/espaceback.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


import {MatToolbarModule} from '@angular/material/toolbar';
;
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { EventCrudComponent } from './event-crud/event-crud.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddeventsComponent } from './addevents/addevents.component';
import { EventsComponent } from './events/events.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PhotographebackComponent } from './photographeback/photographeback.component';


@NgModule({
  declarations: [
    BackOfficeComponent,
      UserProfileComponent,
      SidebarComponent,
      ServeurbackComponent,
      EspacebackComponent,
      AddeventsComponent,
      EventCrudComponent,
      NavBarComponent,
      EventsComponent,
      DashbordComponent,
      PhotographebackComponent,



  ],

  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
      CommonModule,
      BackOfficeRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      MatChipsModule,
      MatIconModule,

      HttpClientModule,
      LayoutModule,
      RouterModule,
      MatFormFieldModule,
      MatSliderModule,
      MatGridListModule,
      MatCardModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule,
      MatTableModule,
      MatDatepickerModule,
      ObserversModule,
      A11yModule,
      MatChipsModule,
      BrowserModule,
      
      
      


  ],
})
export class BackOfficeModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpModule} from '@angular/http';
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { FileSelectDirective } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import {MatListModule} from '@angular/material/list';
import { RegisterPrinterComponent } from './register-printer/register-printer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { PrinterInfoComponent } from './printer-info/printer-info.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {AgGridModule} from 'ag-grid-angular';
const appRoutes:Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'register', component:RegisterPrinterComponent
  },
  {
    path:'printerinfo', component:PrinterInfoComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterPrinterComponent,
    PrinterInfoComponent,
    HomeComponent,
    FileSelectDirective
    
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    HttpModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatSelectModule,
  //   RouterModule.forRoot([{
  //     path: 'register',component:RegisterPrinterComponent
  //   },
  //   {
  //     path: 'printerinfo',component:PrinterInfoComponent
  //   },
  // ])  
    RouterModule.forRoot(appRoutes),
    MatListModule,
    HttpClientModule,
    MatExpansionModule,
    AgGridModule.withComponents(
      [RegisterPrinterComponent])
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

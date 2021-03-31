import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';
import{RegisterPrinterComponent} from './register-printer/register-printer.component';
import{PrinterInfoComponent} from './printer-info/printer-info.component';
const appRoutes:Routes = [
    
    {path:'register', component:RegisterPrinterComponent},
    {path:'printerinfo', component:PrinterInfoComponent}
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    
  ]
})
export class AppRoutingModule { }

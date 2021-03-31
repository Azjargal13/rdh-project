import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Plugins } from 'protractor/built/plugins';

export interface data{
  controllerName:string;
  deviceModel:string;
  deviceType:string;
}


// export interface PrinterInfo{
//   deviceType:string;
//   controllerName:string;
//   deviceModel:string;
// }
const uri_allPlugins='http://localhost:3001/getPlugin';
const uri_registerPrinter='http://localhost:3001/registerPrinter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pluginInfo=[];
  selectedData={
    printerIP:"",
    controllerName:{
      deviceType:""
    },
    deviceModel:"",
    deviceType:""
  };
  registerPrinterRes:{
    "statusMessage":""
  };
  
  selectedDeviceType:{};
  controllerControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  // controllers:Controller[] = [
  //   {
  //     name:'IC-313', deviceModel:'C6100', deviceType:'IC313CHGMLK'
  //   },
  //   {
  //     name:'IC-604', deviceModel:'C6100',deviceType:'IC604CHGMLK'
  //   },
  //   {
  //     name:'IC-314', deviceModel:'C6100',deviceType:'IC314CHGMLK'
  //   },
  //   {
  //     name:'IC-313', deviceModel:'C6085',deviceType:'IC313CHGMLK_C6085'
  //   },
  //   {
  //     name:'IC-315', deviceModel:'C6085',deviceType:'IC315CHGMLK_C6085'
  //   },
  //   {
  //     name:'IC-314', deviceModel:'C2070',deviceType:'IC314DGE'
  //   },
  //   {
  //     name:'IC-417', deviceModel:'C2060L',deviceType:'IC417DGE_C2060L'
  //   },
  //   {
  //     name:'IC-605', deviceModel:'C3070L',deviceType:'IC605DGELMLK'
  //   },
    

  // ];
  constructor() { 
    this.selectedData={
      printerIP:"",
      controllerName:{
        deviceType:"",
      },
      deviceModel:"",
      deviceType:""
    }
  }
  getPrinterInfo(){
    //console.log("yes info")
    fetch(uri_allPlugins)
      .then((res)=>{
        console.log(res);
        return res.json();
      })
      .then((result)=>{
        this.pluginInfo=result.data;
        console.log(this.pluginInfo);
        //console.log(this.pluginInfo[0].deviceModel);
        
      })
  }
  getDeviceType(){
    // console.log("controller name", this.selectedData.controllerName.deviceType)
    // console.log("dev type",this.selectedData)
    this.selectedDeviceType=this.selectedData.controllerName.deviceType;
   
  }
  ngOnInit() {
    this.selectedData={
      printerIP:"",
      controllerName:{
        deviceType:""
      },
      deviceModel:"",
      deviceType:""
    }
  }
  registerPrinter(){
    fetch(uri_registerPrinter,{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(this.printerId)
      body: JSON.stringify({"ipAddress":this.selectedData.printerIP,
                            "deviceType":this.selectedData.controllerName.deviceType
    })
    }
    )
      .then((res)=>{
        console.log(res);
        return res.json();
      })
      .then((result)=>{
        this.registerPrinterRes=result.status;
        console.log(this.registerPrinterRes.statusMessage);
        alert(this.registerPrinterRes.statusMessage);
      })
      
   // console.log("info",this.selectedData)
  }

  
}

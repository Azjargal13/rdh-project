import { Component, OnInit } from '@angular/core';
import {FileSelectDirective, FileUploader, FileUploadModule} from 'ng2-file-upload';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Body } from '@angular/http/src/body';

const uri_upload='http://localhost:3001/sendMyFile';
const uri_quickPrinter='http://localhost:3001/quickPrint';
const uri_uploadedJobs='http://localhost:3001/getUploadedFiles';

const uri_allPlugins='http://localhost:3001/getPlugin';
const uri_printerDetail='http://localhost:3001/getPrinterDetails';

const uri_getRegisterPrinter='http://localhost:3001/getRegisteredPrinter';

const uri_getDeviceInfo='http://localhost:3001/getDeviceInfo';
const uri_getColor='http://localhost:3001/getColorProfile';
const uri_getColorConfig='http://localhost:3001/getColorConfig';
const uri_getRegisteredPrinters='http://localhost:3001/getRegisteredPrinter';
@Component({
  selector: 'app-register-printer',
  templateUrl: './register-printer.component.html',
  styleUrls: ['./register-printer.component.css'],
  
})

export class RegisterPrinterComponent implements OnInit {
     result:{
      
         statusMessage:""
     };
    uploadJobList:{}
    allPlugins:{
      "deviceModel":"",
      "controllerName":"",
      "deviceType":"",
      "engineControllerName":""
    };
    printerDetail:{
    
     "deviceModel":"",
     colorPrinter:""

    };
    registeredPrinterDetail:{
      
    };
    printerId:{
      "printerId":1
    }
    deviceInfo:{
      "deviceStatus":{
        "printerStatus":"",
      "printerErrorState":""
      } 
    };
    colorProfile:{
      profileName:"",
      usage:"",
      colorSpace:""
    };
    colorConfig:{
      "configurationName":"",
      "isDefault":""
    };
    allRegisteredPrintersInfo:{
    "devices":{
      "printerId":"",
      "deviceModel":"",
      "deviceType":"",
      "printerStatus": "",
      "colorPrinter": "",
      "userName": "",
      "password": "",
      "jobNotificationURL": "",
      "deviceNotificationURL": "",
      "controllerName": "",
      "engineControllerName": "",
      "supportPDF": true,
      "highQualityColor": false,
      "printerErrorState": "",
      "ipAddress": ""

    }
    }
    printerIDInfo:{
      "printerId":""
    }
  uploader:FileUploader = new FileUploader({url:uri_quickPrinter});
  printuploader:FileUploader = new FileUploader({url:uri_quickPrinter});
  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    // this.http.post(uri_upload{
    //   headers:new HttpHeaders({
    //     'Content-Type':""
    //   })
    // }
    //  )
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('Job sent successfully');
         this.result=status;
         alert(this.result);

     };
     
    //  this.printuploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    //  this.printuploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //    console.log('ImageUpload:uploaded:', item, status, response);
    //    alert('Job sent successfully');
   // this.getUploadedJobs();
   };
    getUploadedJobs(){
      fetch(uri_uploadedJobs)
      .then((res)=>{
        console.log(res);
        return res.json();
      })
      .then((result)=>{
        this.uploadJobList=result.details;
        console.log(this.uploadJobList[0]);
        console.log(this.uploadJobList[1]);
        console.log(this.uploadJobList);
      })
  }

  //getUploadedJobs();

  getUploadedPlugins(){
    //alert('You pressed plugins');
    fetch(uri_allPlugins)
      .then((res)=>{
        console.log(res);
        return res.json();
      })
      .then((result)=>{
        this.allPlugins=result.data;
        console.log(this.allPlugins);
        console.log(this.allPlugins[0].deviceModel);
        
      })

  }  
  getPrinterDetails(){
    //alert('You pressed printer details');
    fetch(uri_printerDetail,{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(this.printerId)
      body: JSON.stringify({"printerId":1})
    }
    )
      .then((res)=>{
        console.log(res);
        return res.json();
      })
      .then((result)=>{
        this.printerDetail=result.data;
        console.log("result",this.printerDetail);
        //console.log("color printer",this.printerDetail.colorPrinter);
      })
      function test(t) {      //defining a function
        if (t === undefined) {       //if t=undefined, call tt
              console.log(t)      //call t
        }
        return t;    
      }
      var a=10;    //a is a variable with undefined value
      console.log(test(a)); //function call
  }
  getRegisteredPrinter(){
    //alert('You pressed get register printer');
    fetch(uri_getRegisterPrinter)
      .then((res)=>{
        console.log(res);
        return res.json();
      })
      .then((result)=>{
        this.registeredPrinterDetail=result.data.devices;
        console.log("this is ger printer",this.registeredPrinterDetail);
        //console.log(this.registeredPrinterDetail[0].deviceModel);
      })
  }
  getDeviceInfo(){
    //alert('You pressed device information');
    fetch(uri_getDeviceInfo)
      .then((res)=>{
        console.log(res);
        return res.json();
      })
      .then((result)=>{
        this.deviceInfo=result.data;
        console.log(this.deviceInfo);
        //console.log(this.deviceInfo.printerErrorState);
      })

  }
  getColorPro(){
    //alert('You pressed color profile');
    fetch(uri_getColor)
      .then((res)=>{
        console.log(res);
        return res.json();
      })
      .then((result)=>{
        this.colorProfile=result.data.colorProfiles;
        console.log("clo pro",this.colorProfile);
        //console.log("test", this.colorProfile.colorProfiles[0].profileName);
      
      })

  }
  getColorConfig(){
    //alert('You pressed color config');
    fetch(uri_getColorConfig)
      .then((res)=>{
        console.log(res);
        return res.json();
      })
      .then((result)=>{
        this.colorConfig=result.data;
        
        //console.log(this.colorConfig[0].deviceModel);
      })
  }

  getAllRegisteredPrinters(){
    fetch(uri_getRegisteredPrinters)
    .then((res)=>{
      console.log(res);
      return res.json();
    })
    .then((result)=>{
      this.allRegisteredPrintersInfo=result.data;
      //console.log(this.allRegisteredPrintersInfo.devices[0].printerId);
      console.log("get reg printers", this.allRegisteredPrintersInfo.devices);
      this.printerId=this.allRegisteredPrintersInfo.devices[0].printerId;
      //console.log("printerID is ", this.printerId)
      //this.printerId.devices.printerId=this.allRegisteredPrintersInfo.devices.printerId;
      //console.log(this.pluginInfo[0].deviceModel);
      
    })
  }
}
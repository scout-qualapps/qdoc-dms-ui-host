import { Component, OnInit,HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';

interface value {
  value: string;
  viewValue: string;
  className:string;
}
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})

export class UploadFileComponent implements OnInit {
  security = new FormControl();
  fileType = new FormControl();
 
  securityValue: value[] = [
    {value: 'visibility_off', className:'visibility-off', viewValue: 'Private'},
    {value: 'visibility', className:'visibility', viewValue: 'Public'},

  ];

  fileTypeValue: value[] = [
    {value: 'assets/images/icon-pdf.svg', className:'', viewValue: 'PDF'},
    {value: 'assets/images/icon-doc.svg', className:'',  viewValue: 'Doc'},
    {value: 'assets/images/icon-xls.svg', className:'',  viewValue: 'Excel'},
  ];

  getFileTypeName(fileSrc: string) {
    const file = this.fileTypeValue.find(f=> f.value === fileSrc);
    return file?.viewValue;
   }

   getSecurityTypeName(fileSrc: string) {
    const scc = this.securityValue.find(f=> f.value === fileSrc);
    return scc?.viewValue;
   }

   isChecked:boolean;
 
   Default = false;
  
  error: string;
  dragAreaClass: string;
  draggedFiles: any;
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

  saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      
      this.draggedFiles = files;
      
    }
  }

}

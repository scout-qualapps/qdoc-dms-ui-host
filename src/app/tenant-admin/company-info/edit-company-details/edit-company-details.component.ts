import { Component, OnInit,HostListener } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

interface value {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-company-details',
  templateUrl: './edit-company-details.component.html',
  styleUrls: ['./edit-company-details.component.scss']
})
export class EditCompanyDetailsComponent implements OnInit {
  stateList = new FormControl();
  statevalueValue: value[] = [
    {value: 'Alabama', viewValue: 'Alabama'},
    {value: ' Alaska', viewValue: ' Alaska'},
    {value: 'California', viewValue: 'California'},
    {value: 'Florida', viewValue: 'Florida'},
    {value: 'Georgia', viewValue: 'Georgia'},
    {value: 'New Jersey', viewValue: 'New Jersey'},
    {value: 'Texas', viewValue: 'Texas'},
    {value: 'Oklahoma', viewValue: 'Oklahoma'},
    {value: 'Washington', viewValue: 'Washington'},

  ];
  selectedValue =  'California';
  error: string;
  dragAreaClass: string;
  draggedFiles: any;
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  constructor() { }

  ngOnInit(): void {
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

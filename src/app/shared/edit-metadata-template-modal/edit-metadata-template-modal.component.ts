import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-edit-metadata-template-modal',
  templateUrl: './edit-metadata-template-modal.component.html',
  styleUrls: ['./edit-metadata-template-modal.component.scss']
})
export class EditMetadataTemplateModalComponent implements OnInit {
  selected = new FormControl('Scanning');
  selected2 = new FormControl('Private');
  setAsDefault = true;
  isActive = true;

  myControl = new FormControl()
  options: string[] = ['Jason, Mathew', 'James, Doe', 'Srikanta, Prakash'];
  filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    window.scroll(0, 0);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}

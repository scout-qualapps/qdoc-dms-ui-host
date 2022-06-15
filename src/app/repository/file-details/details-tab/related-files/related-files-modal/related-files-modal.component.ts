import { LiveAnnouncer } from "@angular/cdk/a11y";
import { Component, OnInit, ViewChild } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, Sort } from "@angular/material/sort";
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from "@angular/material/dialog";

export interface PeriodicElement {
  position: number;
  checkbox: string;
  name: string;
  repository: string;
  folder: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    checkbox: "",
    name: "file1.xls",
    repository: " Repository 1",
    folder: "Folder 1",
  },
  {
    position: 2,
    checkbox: "",
    name: "file2.PDF",
    repository: " Repository 2",
    folder: "Folder 2",
  },
  {
    position: 3,
    checkbox: "",
    name: "file3.xls",
    repository: " Repository 3",
    folder: "Folder 3",
  },
  {
    position: 4,
    checkbox: "",
    name: "file4.doc",
    repository: " Repository 4",
    folder: "Folder 4",
  },
  {
    position: 5,
    checkbox: "",
    name: "file5.doc",
    repository: " Repository 5",
    folder: "Folder 2",
  }
];

@Component({
  selector: "app-related-files-modal",
  templateUrl: "./related-files-modal.component.html",
  styleUrls: ["./related-files-modal.component.scss"],
})
export class RelatedFilesModalComponent implements OnInit {
  displayedColumns: string[] = [
    "checkbox",
    "name",
    "repository",
    "folder",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? "deselect" : "select"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.position + 1
      }`;
  }
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) { }
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void { }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce("Sorting cleared");
    }
  }
}
